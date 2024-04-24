import { DetailActionBar } from "@/components/layout/action-bar";

export default function FundingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div style={{ paddingBottom: 50 }}>{children}</div>
      <DetailActionBar buttonText="선물하기" handleSubmit={() => {}} />
    </section>
  );
}
