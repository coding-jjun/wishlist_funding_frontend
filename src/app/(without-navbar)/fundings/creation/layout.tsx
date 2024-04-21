import { DetailActionBar } from "@/components/layout/action-bar";

export default function FundingCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      {/*<DetailActionBar buttonText="작성하기" handleSubmit={handleSubmit} />*/}
    </section>
  );
}
