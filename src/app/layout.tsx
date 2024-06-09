import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/components/theme";
import { QueryClientProvider, RecoilRootProvider } from "@/components/provider";
import { OverlayProvider } from "@/components/overlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "기프투게더",
  description: "기프투게더",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <RecoilRootProvider>
          <ThemeProvider theme={theme}>
            <OverlayProvider>
              <QueryClientProvider>{children}</QueryClientProvider>
            </OverlayProvider>
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
