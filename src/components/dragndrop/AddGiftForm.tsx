import React from "react";
import { Button } from "@mui/material";

interface Props {
  onSubmit: () => void;
}

export default function AddGiftForm({ onSubmit }: Props) {
  return (
    <Button
      onClick={onSubmit}
      fullWidth
      color="primary"
      sx={{
        mt: 1,
        border: "1px dashed",
        borderRadius: "8px",
      }}
    >
      아이템 추가
    </Button>
  );
}
