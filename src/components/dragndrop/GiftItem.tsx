import React, { useEffect } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import GiftDto from "@/types/GiftDto";
import DragHandler from "@/components/dragndrop/DragHandler";

interface GiftItemProps {
  index: number;
  gifts: GiftDto[];
  onDelete: () => void;
}

export default function GiftItem({ index, gifts, onDelete }: GiftItemProps) {
  const { register } = useFormContext();

  return (
    <Card
      sx={{
        borderRadius: 5,
        boxShadow: "5px 15px 15px rgba(0,0,0,0.05)",
        marginBottom: "15px",
      }}
    >
      <CardContent>
        <DragHandler id={index} onDelete={onDelete} />
        <TextField
          {...register(`gifts[${index - 1}].giftUrl`)}
          placeholder="url"
          size="small"
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            borderRadius: 4,
            backgroundColor: "#ECF0EF",
          }}
        />
        <TextField
          {...register(`gifts[${index - 1}].giftOpt`)}
          placeholder="제품 옵션"
          size="small"
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            borderRadius: 4,
            backgroundColor: "#ECF0EF",
          }}
        />
        <TextField
          {...register(`gifts[${index - 1}].giftCont`)}
          placeholder="상품 설명"
          size="small"
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            borderRadius: 4,
            backgroundColor: "#ECF0EF",
          }}
        />
      </CardContent>
    </Card>
  );
}
