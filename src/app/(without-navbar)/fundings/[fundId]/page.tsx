interface Funding {
  fundId: number;
  fundTitle: string;
  fundCont: string;
  fundImg: string;
  fundTheme: string;
  fundGoal: number;
  fundSum: number;
  endAt: string;
  regAt: string;
}

async function getData() {
  const res = await fetch(
    "http://43.201.66.126:3000/api/funding/user/1/?fundPublFilter=both&fundThemes=Birthday&fundThemes=Anniversary&fundThemes=Donation&status=ongoing&sort=endAtAsc",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FundingDetailPage() {
  const data = await getData();
  const {
    fundId,
    fundTitle,
    fundCont,
    fundImg,
    fundTheme,
    fundGoal,
    fundSum,
    endAt,
    regAt,
  } = data.data.fundings[0];

  return (
    <>
      <p>ID: {fundId}</p>
      <p>제목: {fundTitle}</p>
      <p>내용: {fundCont}</p>
      <p>테마: {fundTheme}</p>
      <p>목표금액: {fundGoal}원</p>
      <p>누적금액: {fundSum}원</p>
      <p>종료일: {endAt}</p>
      <p>등록일: {regAt}</p>
      <p>이미지: {fundImg}</p>
    </>
  );
}
