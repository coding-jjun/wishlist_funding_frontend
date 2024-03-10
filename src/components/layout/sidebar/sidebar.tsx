import { Box, Drawer } from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer open={false}>
      {/*TODO: PC 사이드바 작성 필요*/}
      <Box sx={{ width: 250 }} role="presentation"></Box>
    </Drawer>
  );
}
