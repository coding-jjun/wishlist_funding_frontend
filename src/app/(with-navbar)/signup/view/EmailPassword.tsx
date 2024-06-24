"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import type { FieldErrors } from "react-hook-form";
import { Control, Controller, useFormContext } from "react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignUpForm from "@/app/(with-navbar)/signup/view/SignUpForm";
import { GreyTextField } from "@/components/textfield";
import { validateEmail } from "@/utils/validateEmail";
import { CreateUserForm } from "@/types/User";
import { CommonResponse } from "@/types/CommonResponse";

interface Props {
  onNext: () => void;
}

export default function EmailPassword({ onNext }: Props) {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext<CreateUserForm>();

  const handleNextClick = async () => {
    const isValid = await trigger(["userEmail", "userPw"]);
    if (isValid) {
      onNext();
    }
  };

  return (
    <SignUpForm
      title="이메일과 비밀번호를 입력해주세요."
      currStep={1}
      totalStep={4}
      formContent={
        <>
          <EmailField control={control} errors={errors} />
          <PasswordField control={control} errors={errors} />
        </>
      }
      onPrev={() => router.back()}
      onNext={handleNextClick}
    />
  );
}

interface FieldProps {
  control: Control<CreateUserForm>;
  errors: FieldErrors<CreateUserForm>;
}

const EmailField = ({ control, errors }: FieldProps) => {
  const validate = async (email: string | undefined) => {
    if (!email) {
      return "이메일은 필수 입력 항목입니다.";
    }

    if (!validateEmail(email)) {
      return "올바르지 않은 이메일 형식입니다.";
    }

    try {
      const { data } = await axios.post<CommonResponse<Boolean>>(
        `/api/auth/email`,
        {
          userEmail: email,
        },
      );

      if (!data.data) {
        return "이미 가입된 이메일입니다.";
      }
    } catch (e) {
      return "서버와의 통신에 실패했습니다.";
    }

    return true;
  };

  return (
    <Controller
      name="userEmail"
      control={control}
      rules={{
        required: "이메일은 필수 입력 항목입니다.",
        validate,
      }}
      render={({ field }) => (
        <GreyTextField
          {...field}
          label="이메일"
          error={!!errors.userEmail}
          helperText={errors.userEmail?.message?.toString() || ""}
        />
      )}
    />
  );
};

const PasswordField = ({ control, errors }: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      name="userPw"
      control={control}
      rules={{ required: "비밀번호는 필수 입력 항목입니다." }}
      render={({ field }) => (
        <GreyTextField
          {...field}
          label="비밀번호"
          type={showPassword ? "text" : "password"}
          fullWidth
          error={!!errors.userPw}
          helperText={errors.userPw?.message?.toString() || ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
