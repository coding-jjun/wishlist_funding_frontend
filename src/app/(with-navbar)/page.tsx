"use client";
import dynamic from "next/dynamic";
import MainPageSkeleton from "@/app/(with-navbar)/page.skeleton";

const MainPageContent = dynamic(
  () => import("@/app/(with-navbar)/page.suspense"),
  {
    ssr: false,
    loading: () => <MainPageSkeleton />,
  },
);

export default function Home() {
  return (
    <main>
      <MainPageContent />
    </main>
  );
}
