"use client";
import { IconButton } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { ActionBarStack } from "@/components/layout/action-bar/ActionBarStack";
import { ActionBarButton } from "@/components/layout/action-bar/ActionBarButton";

export default function DetailActionBar() {
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
      <ActionBarButton variant="contained">구매하기</ActionBarButton>
    </ActionBarStack>
  );
}
