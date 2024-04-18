import { DetailActionBar } from "@/components/layout/action-bar";

export default function FundingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <DetailActionBar buttonText="구매하기" />
    </section>
  );
}
