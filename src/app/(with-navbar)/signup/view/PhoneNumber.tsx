"use client";
import React from "react";
import axios from "axios";
import { Controller, useFormContext } from "react-hook-form";
import SignUpForm from "@/app/(with-navbar)/signup/view/SignUpForm";
import { GreyTextField } from "@/components/textfield";
import { CreateUserForm } from "@/types/User";
import { CommonResponse } from "@/types/CommonResponse";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function PhoneNumber({ onPrev, onNext }: Props) {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<CreateUserForm>();

  const handleNextClick = async () => {
    const isValid = await trigger(["userPhone"]);
    if (isValid) {
      onNext();
    }
  };

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
      return "서버와의 통신에 실패했습니다.";
    }

    return true;
  };

  return (
    <SignUpForm
      title="휴대폰 번호를 입력해주세요."
      currStep={3}
      totalStep={4}
      formContent={
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
              label="휴대폰 번호"
              error={!!errors.userPhone}
              helperText={errors.userPhone?.message?.toString() || ""}
            />
          )}
        />
      }
      onPrev={onPrev}
      onNext={handleNextClick}
    />
  );
}
