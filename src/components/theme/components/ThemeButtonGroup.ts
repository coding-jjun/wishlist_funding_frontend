import { ButtonGroup, styled } from "@mui/material";

const ThemeButtonGroup = styled(ButtonGroup)({
  "& .MuiButton-root": {
    "&:focus": {
      borderWidth: "1.3px",
    },
    borderWidth: "1.3px",
    borderColor: "#fff",
    flex: 1,
    borderRadius: "50px",
    color: "#4F4635",
    backgroundColor: "#fff",
    margin: "5px",
    padding: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  marginBottom: "15px",
});

export default ThemeButtonGroup;
