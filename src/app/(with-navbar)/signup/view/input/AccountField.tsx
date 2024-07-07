import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CreateUserForm } from "@/types/User";
import { FormControl, Stack } from "@mui/material";
import BankSelectBar from "@/app/(with-navbar)/signup/view/input/BankSelectBar";
import { GreyTextField } from "@/components/textfield";
import { InputLabel } from "@/app/(with-navbar)/signup/view/input/InputLabel";

const AccountField = () => {
  const { control } = useFormContext<CreateUserForm>();

  return (
    <FormControl>
      <InputLabel>계좌번호</InputLabel>
      <Stack direction="column" spacing={1}>
        <BankSelectBar />
        <Controller
          name="userAccNum"
          control={control}
          render={({ field }) => (
            <GreyTextField
              {...field}
              helperText="- 없이 입력해주세요."
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: false }}
            />
          )}
        />
      </Stack>
    </FormControl>
  );
};

export default AccountField;
