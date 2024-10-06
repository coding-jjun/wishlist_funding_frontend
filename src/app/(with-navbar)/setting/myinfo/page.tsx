"use client";
import NameField from "@/app/(with-navbar)/signup/view/input/NameField";
import NicknameField from "@/app/(with-navbar)/signup/view/input/NicknameField";
import PhoneNumberField from "@/app/(with-navbar)/signup/view/input/PhoneNumberField";
import React, { useEffect } from "react";
import ProfileImageField from "@/app/(with-navbar)/signup/view/input/ProfileImageField";
import BirthdayField from "@/app/(with-navbar)/signup/view/input/BirthdayField";
import AccountField from "@/app/(with-navbar)/signup/view/input/AccountField";
import { FormProvider, useForm } from "react-hook-form";
import { CreateUserForm, UpdateUserDto } from "@/types/User";
import useUpdateUser from "@/query/useUpdateUser";
import useAddAccount from "@/query/useAddAccount";
import { CreateAccountDto } from "@/types/Account";
import {
  Container,
  FormContainer,
  NextButton,
} from "@/app/(with-navbar)/signup/styles";
import useCurrentUserQuery from "@/query/useCurrentUserQuery";
import { useRouter } from "next/navigation";

const DEFAULT_CREATE_USER_DTO: CreateUserForm = {
  userEmail: "",
  userPw: "",
  userName: "",
  userNick: "",
  userPhone: "",
};

const USER_DEFAULT_IMG_ID = 24;

export default function MyInfoPage() {
  const router = useRouter();

  const methods = useForm<CreateUserForm>({
    defaultValues: DEFAULT_CREATE_USER_DTO,
  });

  const { data: user } = useCurrentUserQuery();

  useEffect(() => {
    if (user) {
      methods.reset({
        userName: user.userName,
        userNick: user.userNick,
        userPhone: user.userPhone,
        userImg: user.userImg,
        userBirth: user.userBirth ?? new Date(),
        userAccNum: user.accNum,
        userAccBank: user.bank,
      });
    }
  }, [user, methods]);

  const { handleSubmit } = methods;

  const { mutate: updateUser } = useUpdateUser();
  const { mutateAsync: registerAccount } = useAddAccount();

  const onSubmit = async (data: CreateUserForm) => {
    let {
      userPw,
      userName,
      userNick,
      userPhone,
      userBirth,
      userAccBank,
      userAccNum,
      userImg,
      defaultImgId,
    } = data;

    try {
      if (userAccBank && userAccNum) {
        await createAccount({
          bank: userAccBank,
          accNum: userAccNum,
        });
      }

      if (!userImg) {
        defaultImgId = USER_DEFAULT_IMG_ID;
      }

      const dto: UpdateUserDto = {
        userNick,
        userPw,
        userName,
        userPhone,
        userBirth,
        userImg,
        defaultImgId,
      };

      updateUser(dto);
      router.push("/setting");
    } catch (error) {
      console.error("회원 정보 수정 에러 발생", error);
    }
  };

  const createAccount = async (dto: CreateAccountDto): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
      registerAccount(dto, {
        onSuccess: (accId: number) => resolve(accId),
        onError: (error) => reject(error),
      });
    });
  };

  return (
    <FormProvider {...methods}>
      <Container style={{ marginTop: "40px" }}>
        <FormContainer>
          <ProfileImageField />
          <NameField />
          <NicknameField myNickname={user?.userNick} />
          <PhoneNumberField myPhoneNumber={user?.userPhone} />
          <BirthdayField />
          <AccountField />
          <NextButton
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
            fullWidth
          >
            완료
          </NextButton>
        </FormContainer>
      </Container>
    </FormProvider>
  );
}
