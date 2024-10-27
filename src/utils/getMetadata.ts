import { META } from "@/constants/constants";
import { Metadata } from "next";

interface generateMetadataProps {
  title: string;
  description?: string;
  asPath: string;
  ogImage?: string;
}

export const getMetadata = (metadataProps?: generateMetadataProps) => {
  const { title, description, asPath, ogImage } = metadataProps || {};

  const TITLE = title ? `${title} | 기프투게더` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? asPath : "";
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    // 동일 페이지이지만 경로가 다를 때 원본 url 지정하여 중복 문제 해결
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keywords],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        "naver-site-verification": META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
