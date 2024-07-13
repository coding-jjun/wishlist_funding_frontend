import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import React, { ChangeEvent, useState } from "react";
import addComma from "@/utils/addComma";

export default function AmountInput() {
  const { register, setValue, watch } = useFormContext();
  const [amount, setAmount] = useState<number>(0);

  // const input = watch("fundGoal")
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    let strVal = inputVal.replaceAll(",", "");
    setAmount(Number(strVal));
  };

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="금액"
        type="text"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          onChange: handleAmountChange,
        }}
        value={addComma(amount) || 0}
        {...register("fundGoal", {
          required: true,
          pattern: {
            value: /^[0-9,]*$/,
            message: "숫자만 입력 가능해요.",
          },
        })}
      />
    </Grid>
  );
}
