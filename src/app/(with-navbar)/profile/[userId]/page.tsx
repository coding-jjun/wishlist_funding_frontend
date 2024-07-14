"use client";
import dynamic from "next/dynamic";
import ProfilePageSkeleton from "@/app/(with-navbar)/profile/[userId]/page.skeleton";

const MyPageContent = dynamic(
  () => import("@/app/(with-navbar)/profile/[userId]/page.suspense"),
  {
    ssr: false,
    loading: () => <ProfilePageSkeleton />,
  },
);

interface Params {
  params: {
    userId: string;
  };
}

export default function MyPagePage({ params }: Params) {
  return <MyPageContent params={params} />;
}
