"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import "dayjs/locale/ko";
import { Stack } from "@mui/material";
import { CreateUserDto, CreateUserForm } from "@/types/User";
import SignUpFormLayout from "@/app/(with-navbar)/signup/view/SignUpFormLayout";
import useAddUser from "@/query/useAddUser";
import ProfileImageField from "@/app/(with-navbar)/signup/view/input/ProfileImageField";
import BirthdayField from "@/app/(with-navbar)/signup/view/input/BirthdayField";
import AccountField from "@/app/(with-navbar)/signup/view/input/AccountField";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function AdditionalInfo({ onPrev, onNext }: Props) {
  const { handleSubmit } = useFormContext<CreateUserForm>();
  const { mutate: addUser } = useAddUser();

  const onSubmit = (data: CreateUserForm) => {
    const {
      userEmail,
      userPw,
      userName,
      userNick,
      userPhone,
      userBirth,
      userImg,
    } = data;

    const dto: CreateUserDto = {
      userEmail,
      userPw,
      userName,
      userNick,
      userPhone,
      userBirth,
      userImg,
    };

    addUser(dto);
    onNext();
  };

  return (
    <SignUpFormLayout
      title="추가 정보를 입력해주세요."
      currStep={4}
      totalStep={4}
      formContent={
        <Stack direction="column" spacing={2}>
          <ProfileImageField />
          <BirthdayField />
          <AccountField />
        </Stack>
      }
      onPrev={onPrev}
      onNext={handleSubmit(onSubmit)}
    />
  );
}
