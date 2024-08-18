import React from "react";
import axios, { AxiosError } from "axios";
import { Controller, useFormContext } from "react-hook-form";
import { GreyTextField } from "@/components/textfield";
import { CommonResponse } from "@/types/CommonResponse";
import { InputLabel } from "@/app/(with-navbar)/signup/view/input/InputLabel";
import { CreateUserForm } from "@/types/User";
import { ErrorData } from "@/types/ErrorData";

const validate = async (phoneNumber: string | undefined) => {
  if (!phoneNumber) {
    return "전화번호는 필수 입력 항목입니다.";
  }

  try {
    const { data } = await axios.post<CommonResponse<Boolean>>(
      `/api/auth/phone`,
      {
        userPhone: phoneNumber,
      },
    );

    if (!data.data) {
      return "이미 가입된 휴대폰 번호입니다.";
    }
  } catch (e) {
    if (axios.isAxiosError(e) && (e as AxiosError<ErrorData>).response) {
      const axiosError = e as AxiosError<ErrorData>;
      if (axiosError.response) {
        return axiosError.response.data.message;
      }
    }
    return "서버와의 통신에 실패했습니다.";
  }

  return true;
};

const PhoneNumberField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateUserForm>();

  return (
    <div>
      <InputLabel>휴대폰 번호</InputLabel>
      <Controller
        name="userPhone"
        control={control}
        rules={{
          required: "휴대폰 번호는 필수 입력 항목입니다.",
          validate,
        }}
        render={({ field }) => (
          <GreyTextField
            {...field}
            error={!!errors.userPhone}
            helperText={errors.userPhone?.message?.toString() || ""}
            InputLabelProps={{ shrink: false }}
            margin="none"
          />
        )}
      />
    </div>
  );
};

export default PhoneNumberField;
