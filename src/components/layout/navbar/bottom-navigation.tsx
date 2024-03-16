import { BottomNavigation, styled } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  px: 4,
  py: 0.5,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  border: "1px solid #eeeeee",
  borderBottom: 0,
  "& .MuiBottomNavigationAction-root, svg": {
    fontSize: 28,
    color: grey[500],
  },
  ".Mui-selected svg": {
    fontSize: 28,
    color: red[300],
  },
}));
