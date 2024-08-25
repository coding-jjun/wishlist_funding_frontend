import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();

    const response = await axios.post(
      "https://api.giftogether.co.kr/auth/login",
      body,
      {
        withCredentials: true,
      },
    );

    const res = new NextResponse(JSON.stringify(response.data), {
      status: 200,
    });

    const setCookieHeader = response.headers["set-cookie"];
    if (setCookieHeader) {
      setCookieHeader.forEach((cookie: string) => {
        res.headers.append("Set-Cookie", cookie);
      });
    }

    return res;
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Login failed" }), {
      status: 401,
    });
  }
}
