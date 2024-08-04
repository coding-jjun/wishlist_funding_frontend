"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IconButton, Link } from "@mui/material";
import { ArrowBackIosNew as ArrowBackIosNewIcon } from "@mui/icons-material";
import { CreateUserForm, UpdateUserDto } from "@/types/User";
import { TopFixedStack } from "@/components/layout/action-bar/TopFixedStack";
import {
  Container,
  FormContainer,
  NextButton,
} from "@/app/(with-navbar)/signup/styles";
import RequiredInfoForm from "@/app/(with-navbar)/signup/oauth/view/RequiredInfoForm";
import ExtraInfoForm from "@/app/(with-navbar)/signup/oauth/view/ExtraInfoForm";
import useUpdateSignUpUser from "@/query/useUpdateSignUpUser";

const DEFAULT_CREATE_USER_DTO: CreateUserForm = {
  userEmail: "",
  userPw: "",
  userName: "",
  userNick: "",
  userPhone: "",
};

export default function OAuthSignUpPage() {
  const methods = useForm<CreateUserForm>({
    defaultValues: DEFAULT_CREATE_USER_DTO,
  });

  const { handleSubmit } = methods;

  const { mutate: updateUser } = useUpdateSignUpUser();

  const onSubmit = (data: CreateUserForm) => {
    const {
      userPw,
      userEmail,
      userName,
      userNick,
      userPhone,
      userBirth,
      userAccBank,
      userAccNum,
      userImg,
      defaultImgId,
    } = data;

    // TODO: 계좌 생성 API 요청 보내는 작업 필요
    const userAcc = 1;

    // TODO: 프로필 이미지 관련 설정
    const dto: UpdateUserDto = {
      userNick,
      userPw,
      userName,
      userPhone,
      userEmail,
      userBirth,
    };

    updateUser(dto);
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Container>
          <TopFixedStack direction="row" alignItems="center">
            <Link href="/login" sx={{ textDecoration: "none" }}>
              <IconButton>
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
          </TopFixedStack>
          <FormContainer>
            <RequiredInfoForm />
            <ExtraInfoForm />
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
      </form>
    </FormProvider>
  );
}
