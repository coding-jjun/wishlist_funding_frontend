import React from "react";
import { Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Postcode from "@/components/Postcode";

interface Props {
  onClose: () => void;
}

export default function AddAddress({ onClose }: Props) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <IconButton onClick={handleClose} color="primary" aria-label="close">
        <CloseIcon />
      </IconButton>
      <h3>새 배송지 추가</h3>
      <div>
        <TextField label="배송지 명" fullWidth margin="normal" />
        <TextField label="받으실 분" fullWidth margin="normal" />
        <TextField label="휴대폰 번호" fullWidth margin="normal" />
        <Postcode />
        <Button variant="contained">확인</Button>
      </div>
    </>
  );
}
