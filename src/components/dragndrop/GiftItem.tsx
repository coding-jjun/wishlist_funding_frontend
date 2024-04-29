import React, { useState } from "react";
import GiftDto from "@/types/GiftDto";
import { Card, CardContent, TextField } from "@mui/material";

interface GiftItemProps {
  index: number;
  giftInfo: GiftDto;
}

export default function GiftItem({ index, giftInfo }: GiftItemProps) {
  const [gift, setGift] = useState<GiftDto>(giftInfo);

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
        {renderGiftField("url", gift.giftOpt, (e) =>
          setGift({
            ...gift,
            giftUrl: e.target.value,
          }),
        )}
        {renderGiftField("상품 옵션", gift.giftOpt, (e) =>
          setGift({
            ...gift,
            giftOpt: e.target.value,
          }),
        )}
        {renderGiftField("내용", gift.giftCont, (e) =>
          setGift({
            ...gift,
            giftCont: e.target.value,
          }),
        )}
      </CardContent>
    </Card>
  );
}
