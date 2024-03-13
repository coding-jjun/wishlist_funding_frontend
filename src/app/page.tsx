import Card from "@/components/card";
import React from "react";

const Home: React.FC = () => {
  // 임시 데이터
  let price = 1000;
  let fundSum = 100;

  const cardData = {
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
    userId: "해롱쥐",
    title: "에어팟 맥스 사고싶어요 💕",
    theme: "생일",
    endDate: "2024-03-30",
    fundGoal: price.toLocaleString("ko-KR"),
    fundSum: fundSum,
    progress: (fundSum / price) * 100,
  };

  return (
    <main>
      <div>
        <h1>Home</h1>
        <Card {...cardData} />
      </div>
    </main>
  );
};

export default Home;
