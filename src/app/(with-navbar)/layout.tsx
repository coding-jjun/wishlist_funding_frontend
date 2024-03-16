import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Box } from "@mui/material";
import { useViewport } from "@/hook/useViewport";
import Sidebar from "@/components/layout/sidebar/sidebar";
import NavigationBar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "티끌 모아 펀딩",
  description: "티끌 모아 펀딩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = useViewport();

  return (
    <html lang="ko">
      <body className={inter.className}>
        <Box>
          {children}
          {isMobile ? <NavigationBar /> : <Sidebar />}
        </Box>
      </body>
    </html>
  );
}
