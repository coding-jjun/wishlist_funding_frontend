import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  handleClick: () => void;
  content: React.ReactNode;
  boxSx?: CSSProperties;
}

export default function BoxButton({ handleClick, content, boxSx }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "140px",
        bgcolor: grey[200],
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...boxSx,
      }}
      onClick={handleClick}
    >
      {content}
    </Box>
  );
}
