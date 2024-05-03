import { CSSProperties } from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

interface Props {
  fullSize: boolean;
  boxSx?: CSSProperties;
}

export default function FullSizeIcon({ fullSize, boxSx }: Props) {
  return (
    <Box
      sx={{
        bgcolor: grey[500],
        position: "absolute",
        top: 5,
        left: 5,
        opacity: 0.5,
        width: 20,
        height: 20,
        borderRadius: 1,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...boxSx,
      }}
    >
      {fullSize ? (
        <FullscreenExitIcon fontSize="small" />
      ) : (
        <FullscreenIcon fontSize="small" />
      )}
    </Box>
  );
}
