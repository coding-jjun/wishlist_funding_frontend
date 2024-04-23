import React from "react";
import GiftDto from "@/types/GiftDto";
import { Card, CardContent, TextField } from "@mui/material";

interface GiftItemProps {
  index: number;
  formData: GiftDto;
  handleChange: (index: number, key: keyof GiftDto, value: string) => void;
}

export default function GiftItem({
  index,
  formData,
  handleChange,
}: GiftItemProps) {
  const renderGiftField = (
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => (
    <TextField
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="dense"
      InputProps={{
        sx: {
          height: "40px",
          borderRadius: "20px",
        },
      }}
    />
  );

  return (
    <Card variant="outlined" key={index} style={{ marginBottom: "10px" }}>
      <CardContent>
        {renderGiftField("url", formData.giftUrl, (e) =>
          handleChange(index, "giftUrl", e.target.value),
        )}
        {renderGiftField("옵션", formData.giftOpt, (e) =>
          handleChange(index, "giftOpt", e.target.value),
        )}
        {renderGiftField("내용", formData.giftCont, (e) =>
          handleChange(index, "giftCont", e.target.value),
        )}
      </CardContent>
    </Card>
  );
}
