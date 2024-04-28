import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import GiftDto from "@/types/GiftDto";

interface Prop {
  onSubmit: () => void;
}

export default function AddGiftForm({ onSubmit }: Prop) {
  const formData: GiftDto = { giftUrl: "", giftOpt: "", giftCont: "" };
  const [formDataList, setFormDataList] = useState<GiftDto[]>([formData]);

  const handleAddForm = () => {
    const newFormDataList = [...formDataList, formData];
    onSubmit();
    setFormDataList(newFormDataList);
  };

  return (
    <Tooltip title="선물 추가" onClick={handleAddForm}>
      <IconButton>
        <AddBox />
      </IconButton>
    </Tooltip>
  );
}
