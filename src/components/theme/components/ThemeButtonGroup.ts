import { ButtonGroup, styled } from "@mui/material";
import { red } from "@mui/material/colors";

const ThemeButtonGroup = styled(ButtonGroup)({
  marginTop: "15px",
  marginBottom: "15px",
  "& .MuiButton-outlined": {
    borderColor: red[100],
    margin: "5px",
    borderRadius: "20px",
  },
  "& .MuiButton-outlined:hover": {
    borderColor: red[300],
    borderWidth: "1px",
    color: red[300],
  },
  "& .MuiButton-outlined:active": {
    backgroundColor: red[400],
    color: "#fff",
  },
});

export default ThemeButtonGroup;
