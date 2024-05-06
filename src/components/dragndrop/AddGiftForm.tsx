import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import GiftDto from "@/types/GiftDto";

interface Props {
  onSubmit: () => void;
}

export default function AddGiftForm({ onSubmit }: Props) {
  return (
    <Tooltip title="선물 추가" onClick={onSubmit}>
      <IconButton>
        <AddBox />
      </IconButton>
    </Tooltip>
  );
}
