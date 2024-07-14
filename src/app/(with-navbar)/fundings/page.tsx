"use client";
import dynamic from "next/dynamic";
import FundingListPageSkeleton from "@/app/(with-navbar)/fundings/page.skeleton";

const FundingListContent = dynamic(
  () => import("@/app/(with-navbar)/fundings/page.suspense"),
  {
    ssr: false,
    loading: () => <FundingListPageSkeleton />,
  },
);

export default function FundingListPage() {
  return <FundingListContent />;
}
