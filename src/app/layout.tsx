import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/components/theme";
import { QueryClientProvider, RecoilRootProvider } from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giftogether",
  description: "Giftogether",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilRootProvider>
          <ThemeProvider theme={theme}>
            <QueryClientProvider>{children}</QueryClientProvider>
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
