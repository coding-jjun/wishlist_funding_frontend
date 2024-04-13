import { Box } from "@mui/material";
import { useViewport } from "@/hook/useViewport";
import NavigationBar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = useViewport();

  return (
    <Box>
      {children}
      {isMobile ? <NavigationBar /> : <NavigationBar />}
    </Box>
  );
}
