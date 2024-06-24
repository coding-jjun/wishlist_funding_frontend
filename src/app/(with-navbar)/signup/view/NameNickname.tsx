"use client";
import React, { useCallback, useEffect } from "react";
import axios from "axios";
import {
  Control,
  Controller,
  type FieldErrors,
  useFormContext,
  useWatch,
} from "react-hook-form";
import SignUpForm from "@/app/(with-navbar)/signup/view/SignUpForm";
import { GreyTextField } from "@/components/textfield";
import { CreateUserForm } from "@/types/User";
import { CommonResponse } from "@/types/CommonResponse";
import debounce from "lodash/debounce";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function NameNickname({ onPrev, onNext }: Props) {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<CreateUserForm>();

  const handleNextClick = async () => {
    const isValid = await trigger(["userName", "userNick"]);
    if (isValid) {
      onNext();
    }
  };

  return (
    <SignUpForm
      title="이름과 닉네임을 입력해주세요."
      currStep={2}
      totalStep={4}
      formContent={
        <>
          <NameField control={control} errors={errors} />
          <NicknameField control={control} errors={errors} />
        </>
      }
      onPrev={onPrev}
      onNext={handleNextClick}
    />
  );
}

interface FieldProps {
  control: Control<CreateUserForm>;
  errors: FieldErrors<CreateUserForm>;
}

const NameField = ({ control, errors }: FieldProps) => {
  return (
    <Controller
      name="userName"
      control={control}
      rules={{
        required: "이름은 필수 입력 항목입니다.",
      }}
      render={({ field }) => (
        <GreyTextField
          {...field}
          label="이름"
          error={!!errors.userName}
          helperText={errors.userName?.message?.toString() || ""}
        />
      )}
    />
  );
};

const validateNickname = async (nickname: string | undefined) => {
  if (!nickname) {
    return "닉네임은 필수 입력 항목입니다.";
  }

  try {
    const { data } = await axios.post<CommonResponse<Boolean>>(
      `/api/auth/nickname`,
      { userNick: nickname },
    );

    if (!data.data) {
      return "이미 존재하는 닉네임입니다.";
    }
  } catch (e) {
    return "서버와의 통신에 실패했습니다.";
  }

  return true;
};

const NicknameField = ({ control, errors }: FieldProps) => {
  const { setError, clearErrors } = useFormContext<CreateUserForm>();
  const userNick = useWatch({ control, name: "userNick" });

  const debouncedValidate = useCallback(
    debounce(async (value: string) => {
      const validationResult = await validateNickname(value);
      if (validationResult !== true) {
        setError("userNick", { type: "manual", message: validationResult });
      } else {
        clearErrors("userNick");
      }
    }, 500),
    [setError, clearErrors],
  );

  useEffect(() => {
    if (userNick) {
      debouncedValidate(userNick);
    }
    return () => {
      debouncedValidate.cancel();
    };
  }, [userNick, debouncedValidate]);

  return (
    <Controller
      name="userNick"
      control={control}
      rules={{
        required: "닉네임은 필수 입력 항목입니다.",
      }}
      render={({ field }) => (
        <GreyTextField
          {...field}
          label="닉네임"
          error={!!errors.userNick}
          helperText={errors.userNick?.message?.toString() || ""}
        />
      )}
    />
  );
};
