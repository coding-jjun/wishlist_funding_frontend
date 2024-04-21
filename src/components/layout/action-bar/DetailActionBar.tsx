"use client";
import { IconButton } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { ActionBarStack } from "@/components/layout/action-bar/ActionBarStack";
import { ActionBarButton } from "@/components/layout/action-bar/ActionBarButton";

interface Props {
  buttonText: string;
  handleSubmit: () => void;
}

export default function DetailActionBar({ buttonText, handleSubmit }: Props) {
  return (
    <ActionBarStack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={1}
    >
      <IconButton aria-label="share">
        <ShareOutlinedIcon />
      </IconButton>
      <ActionBarButton variant="contained" onClick={handleSubmit}>
        {buttonText}
      </ActionBarButton>
    </ActionBarStack>
  );
}
