import { BankType } from "@/types/Account";

export interface BankInfo {
  type: BankType;
  name: string;
  logo: string;
}

export const banks: BankInfo[] = [
  { type: BankType.Nonghyup, name: "농협", logo: "/images/banks/Nonghyup.svg" },
  { type: BankType.Kookmin, name: "국민", logo: "/images/banks/Kookmin.svg" },
  {
    type: BankType.Kakaobank,
    name: "카카오뱅크",
    logo: "/images/banks/Kakaobank.svg",
  },
  { type: BankType.Shinhan, name: "신한", logo: "/images/banks/Shinhan.svg" },
  { type: BankType.Ibk, name: "기업", logo: "/images/banks/Ibk.svg" },
  { type: BankType.Woori, name: "우리", logo: "/images/banks/Woori.svg" },
  { type: BankType.Daegu, name: "대구", logo: "/images/banks/Daegu.png" },
  { type: BankType.Hana, name: "하나", logo: "/images/banks/Hana.svg" },
  { type: BankType.Kfcc, name: "새마을", logo: "/images/banks/kfcc.jpeg" },
  { type: BankType.Busan, name: "부산", logo: "/images/banks/Busan.png" },
  { type: BankType.Kyongnam, name: "경남", logo: "/images/banks/Kyongnam.png" },
  { type: BankType.Kopo, name: "우체국", logo: "/images/banks/Post.png" },
  { type: BankType.Gwangju, name: "광주", logo: "/images/banks/Gwangju.png" },
  { type: BankType.Scbank, name: "SC", logo: "/images/banks/Scbank.svg" },
  { type: BankType.Nacufok, name: "신협", logo: "/images/banks/Nacufok.png" },
  { type: BankType.Kbank, name: "케이뱅크", logo: "/images/banks/KBank.svg" },
  { type: BankType.Citybank, name: "씨티", logo: "/images/banks/Citybank.png" },
  { type: BankType.Suhyup, name: "수협", logo: "/images/banks/Suhyup.png" },
  { type: BankType.Jeonbuk, name: "전북", logo: "/images/banks/Jeonbook.png" },
  { type: BankType.Jeju, name: "제주", logo: "/images/banks/Jeju.svg" },
  { type: BankType.Kdb, name: "산업", logo: "/images/banks/Kdb.png" },
  { type: BankType.Sbi, name: "SBI저축", logo: "/images/banks/Sbi.png" },
  {
    type: BankType.Nhinvest,
    name: "NH투자",
    logo: "/images/banks/Nonghyup.svg",
  },
  {
    type: BankType.Tossbank,
    name: "토스뱅크",
    logo: "/images/banks/Tossbank.png",
  },
  {
    type: BankType.Deutschebank,
    name: "도이치은행",
    logo: "/images/banks/Deutschebank.webp",
  },
];
