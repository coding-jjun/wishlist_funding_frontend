import { Box } from "@mui/material";
import { useViewport } from "@/hook/useViewport";
import NavigationBar from "@/components/layout/navbar";
import { MainHeader } from "@/components/layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = useViewport();

  return (
    <Box sx={{ padding: "10px", paddingBottom: "70px" }}>
      <MainHeader />
      {children}
      {isMobile ? <NavigationBar /> : <NavigationBar />}
    </Box>
  );
}
