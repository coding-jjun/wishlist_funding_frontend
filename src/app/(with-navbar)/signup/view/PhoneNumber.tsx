"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import SignUpFormLayout from "@/app/(with-navbar)/signup/view/SignUpFormLayout";
import { CreateUserDto, CreateUserForm } from "@/types/User";
import PhoneNumberField from "@/app/(with-navbar)/signup/view/input/PhoneNumberField";
import useAddUser from "@/query/useAddUser";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

const USER_DEFAULT_IMG_ID = 24;

export default function PhoneNumber({ onPrev, onNext }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const { trigger } = useFormContext<CreateUserForm>();
  const { handleSubmit } = useFormContext<CreateUserForm>();
  const { mutateAsync: addUser } = useAddUser();

  const onSubmit = async (data: CreateUserForm) => {
    const isValid = await trigger(["userPhone"]);
    if (!isValid) return;

    setLoading(true);

    let { userEmail, userPw, userName, userNick, userPhone, userBirth } = data;

    const dto: CreateUserDto = {
      userEmail,
      userPw,
      userName,
      userNick,
      userPhone,
      userBirth,
      defaultImgId: USER_DEFAULT_IMG_ID,
    };

    try {
      await addUser(dto);
      onNext();
    } catch (error) {
      console.error("User registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpFormLayout
      title={`휴대폰 번호를 \n입력해주세요.`}
      currStep={3}
      totalStep={4}
      formContent={<PhoneNumberField />}
      onPrev={onPrev}
      onNext={handleSubmit(onSubmit)}
      loading={loading}
    />
  );
}
