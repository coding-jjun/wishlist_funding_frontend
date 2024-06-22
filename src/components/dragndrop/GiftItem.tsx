import React, { ChangeEvent } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import GiftDto from "@/types/GiftDto";

interface GiftItemProps {
  index: number;
  giftInfo: GiftDto;
  onValueChange: (index: number, field: keyof GiftDto, value: string) => void;
}

export default function GiftItem({
  index,
  giftInfo,
  onValueChange,
}: GiftItemProps) {
  const { register, setValue, getValues } = useFormContext();

  const handleInputChange =
    (field: keyof GiftDto) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValue(`gifts[${index}].${field}`, value);
      onValueChange(index, field, value);
    };

  return (
    <Card variant="outlined" style={{ marginBottom: "10px" }}>
      <CardContent>
        <TextField
          {...register(`gifts[${index}].giftUrl`)}
          label="URL"
          fullWidth
          defaultValue={giftInfo.giftUrl}
          onChange={handleInputChange("giftUrl")}
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          {...register(`gifts[${index}].giftOpt`)}
          label="상품 옵션"
          fullWidth
          defaultValue={giftInfo.giftOpt}
          onChange={handleInputChange("giftOpt")}
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          {...register(`gifts[${index}].giftCont`)}
          label="내용"
          fullWidth
          defaultValue={giftInfo.giftCont}
          onChange={handleInputChange("giftCont")}
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </CardContent>
    </Card>
  );
}
