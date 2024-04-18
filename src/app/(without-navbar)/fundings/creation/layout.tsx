import { DetailActionBar } from "@/components/layout/action-bar";
import FundingCreationPage from "@/app/(without-navbar)/fundings/creation/page";
export default function FundingCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const handleSubmit: () => Promise<void> = async () => {
  //   try {
  //     await FundingCreationPage.handleSubmit();
  //   } catch (error) {
  //     console.error("❌펀딩 서브밋 실패", error);
  //   }
  // };

  return (
    <section>
      <FundingCreationPage />
      <DetailActionBar buttonText="작성하기" />
    </section>
  );
}
