import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CSSProperties } from "react";
import { grey } from "@mui/material/colors";

interface Props {
  label: string;
  handleClick: () => void;
  selected: boolean;
  sx?: CSSProperties;
}

export function FilterSelect({ label, handleClick, selected, sx }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={handleClick}
      sx={{
        border: "1px solid grey",
        borderRadius: 10,
        px: 1,
        color: selected ? "#FFFFFF" : undefined,
        backgroundColor: selected ? grey[800] : "#FFFFFF",
        flexShrink: 0,
        whiteSpace: "nowrap",
        ...sx,
      }}
    >
      <Typography variant="body2" color={"inherit"}>
        {label}
      </Typography>
      <KeyboardArrowDownIcon sx={{ margin: 0 }} />
    </Stack>
  );
}
