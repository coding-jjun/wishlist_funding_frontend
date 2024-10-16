import { NextRequest, NextResponse, userAgent } from "next/server";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ error: "URL을 입력해주세요." }, { status: 400 });
  }

  // 사용자가 접속한 기기 정보 가져옴 (User-Agent)
  const { ua } = userAgent(request);
  const clientUserAgent =
    ua ||
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1";

  try {
    // url 인코딩
    const encodedUrl = encodeURIComponent(url);

    // 최종 url 여부 확인
    const getFinalUrl = async (initialUrl: string) => {
      try {
        const response = await axios.head(initialUrl, {
          maxRedirects: 0,
          validateStatus: (status) => status >= 200 && status < 400,
        });
        // 리다이렉트 url인 경우 최종 url 획득
        if (response.status >= 300 && response.status < 400) {
          const redirectResponse = await axios.get(initialUrl, {
            maxRedirects: 10,
            validateStatus: (status) => status >= 200 && status < 400,
          });
          return redirectResponse.request.res.responseUrl;
        }
        // 리다이렉트 url이 아닌 경우 기존 url 반환
        return initialUrl;
      } catch (error) {
        const axiosError = error as any;

        // 리다이렉트 url인 경우 catch
        if (
          axiosError.response &&
          axiosError.response.status >= 300 &&
          axiosError.response.status < 400
        ) {
          const redirectResponse = await axios.get(initialUrl, {
            maxRedirects: 10,
            validateStatus: (status) => status >= 200 && status < 400,
          });
          return redirectResponse.request.res.responseUrl;
        }
        throw error;
      }
    };

    const finalUrl = await getFinalUrl(decodeURIComponent(encodedUrl));
    console.log("🩵최종 URL: ", finalUrl);

    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "User-Agent": clientUserAgent,
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        Connection: "keep-alive",
      },
    });

    if (!response.ok) {
      console.log("Fetch failed with status:", response.status);
      return NextResponse.json(
        { error: `메타데이터 fetch 실패, status code: ${response.status}` },
        { status: 500 },
      );
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const metadata = {
      title:
        document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content") ||
        document.querySelector("title")?.textContent,
      description:
        document
          .querySelector('meta[property="og:description"]')
          ?.getAttribute("content") ||
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content"),
      image:
        document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content") ||
        document
          .querySelector('meta[name="twitter:image"]')
          ?.getAttribute("content"),
    };

    console.log("Ⓜ️metadata: ", metadata);

    return NextResponse.json(metadata);
  } catch (error) {
    console.error("메타데이터 fetch 중 에러:", error);
    return NextResponse.json(
      { error: "메타데이터를 불러오는데 실패했어요." },
      { status: 500 },
    );
  }
}
