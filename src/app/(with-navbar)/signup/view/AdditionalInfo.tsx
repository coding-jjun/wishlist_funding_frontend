"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "dayjs/locale/ko";
import { Stack } from "@mui/material";
import { CreateUserDto, CreateUserForm } from "@/types/User";
import SignUpFormLayout from "@/app/(with-navbar)/signup/view/SignUpFormLayout";
import useAddUser from "@/query/useAddUser";
import ProfileImageField from "@/app/(with-navbar)/signup/view/input/ProfileImageField";
import BirthdayField from "@/app/(with-navbar)/signup/view/input/BirthdayField";
import AccountField from "@/app/(with-navbar)/signup/view/input/AccountField";
import useAddAccount from "@/query/useAddAccount";
import { CreateAccountDto } from "@/types/Account";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

const USER_DEFAULT_IMG_ID = 24;

export default function AdditionalInfo({ onPrev, onNext }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit } = useFormContext<CreateUserForm>();
  const { mutateAsync: addUser } = useAddUser();
  const { mutateAsync: registerAccount } = useAddAccount();

  // 계좌 생성 API
  const createAccount = async (dto: CreateAccountDto): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      registerAccount(dto, {
        onSuccess: (accId: number) => resolve(accId),
        onError: (error) => reject(error),
      });
    });
  };

  const onSubmit = async (data: CreateUserForm) => {
    setLoading(true);

    let {
      userEmail,
      userPw,
      userName,
      userNick,
      userPhone,
      userBirth,
      userImg,
      userAccBank,
      userAccNum,
    } = data;

    let dto: CreateUserDto;

    let userAcc: number | undefined;

    // TODO: 계좌 생성 API 수정되면 반영 필요
    // if (userAccBank && userAccNum && user?.userId) {
    //   userAcc = await createAccount({
    //     userId: user?.userId,
    //     bank: userAccBank,
    //     accNum: userAccNum,
    //   });
    // }

    if (userImg) {
      dto = {
        userEmail,
        userPw,
        userName,
        userNick,
        userPhone,
        userBirth,
        userImg,
      };
    } else {
      dto = {
        userEmail,
        userPw,
        userName,
        userNick,
        userPhone,
        userBirth,
        defaultImgId: USER_DEFAULT_IMG_ID,
      };
    }

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
      loading={loading}
    />
  );
}
