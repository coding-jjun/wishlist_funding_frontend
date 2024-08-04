"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import SignUpFormLayout from "@/app/(with-navbar)/signup/view/SignUpFormLayout";
import { CreateUserForm } from "@/types/User";
import PhoneNumberField from "@/app/(with-navbar)/signup/view/input/PhoneNumberField";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function PhoneNumber({ onPrev, onNext }: Props) {
  const { trigger } = useFormContext<CreateUserForm>();

  const handleNextClick = async () => {
    const isValid = await trigger(["userPhone"]);
    if (isValid) {
      onNext();
    }
  };

  return (
    <SignUpFormLayout
      title={`휴대폰 번호를 \n입력해주세요.`}
      currStep={3}
      totalStep={4}
      formContent={<PhoneNumberField />}
      onPrev={onPrev}
      onNext={handleNextClick}
    />
  );
}
