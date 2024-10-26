import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import React, { ChangeEvent, useState } from "react";
import addComma from "@/utils/addComma";

export default function AmountInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    let strVal = inputVal.replaceAll(",", "");
    setAmount(Number(strVal));
  };

  const validate = async (amount: number) => {
    if (!amount) {
      return "금액을 입력해주세요.";
    }

    if (amount <= 0) {
      return "0보다 큰 숫자를 입력해주세요.";
    }
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
        }}
        value={addComma(amount) || 0}
        {...register("fundGoal", {
          required: "금액을 입력해주세요.",
          validate: validate,
          pattern: {
            value: /^[0-9,]*$/,
            message: "숫자만 입력 가능해요.",
          },
          onChange: handleAmountChange,
        })}
        error={!!errors.fundGoal}
        helperText={errors.fundGoal?.message?.toString() || ""}
      />
    </Grid>
  );
}
