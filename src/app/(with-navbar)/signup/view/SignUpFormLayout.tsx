import React, { ReactNode } from "react";
import { ArrowBackIosNew as ArrowBackIosNewIcon } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { TopFixedStack } from "@/components/layout/action-bar/TopFixedStack";
import {
  Container,
  FormContainer,
  NextButton,
} from "@/app/(with-navbar)/signup/styles";
import SectionTitle from "@/app/(with-navbar)/signup/view/SectionTitle";

interface Props {
  title: string;
  currStep: number;
  totalStep: number;
  formContent: ReactNode;
  onPrev: () => void;
  onNext: () => void;
  loading?: boolean;
}

export default function SignUpFormLayout({
  title,
  currStep,
  totalStep,
  formContent,
  onPrev,
  onNext,
  loading,
}: Props) {
  return (
    <Container>
      <TopFixedStack direction="row" alignItems="center">
        <IconButton onClick={onPrev}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </TopFixedStack>
      <FormContainer>
        <SectionTitle>{title}</SectionTitle>
        {formContent}
        {currStep === totalStep ? (
          <Stack direction="row" justifyContent="space-between">
            <NextButton
              variant="outlined"
              color="secondary"
              onClick={onNext}
              loading={loading}
              sx={{ width: "35%" }}
            >
              건너뛰기
            </NextButton>
            <NextButton
              variant="contained"
              color="secondary"
              loading={loading}
              onClick={onNext}
              sx={{ width: "35%" }}
            >
              완료
            </NextButton>
          </Stack>
        ) : (
          <Stack direction="row" justifyContent="end">
            <NextButton
              variant="contained"
              color="secondary"
              onClick={onNext}
              sx={{ width: "40%" }}
            >
              {`다음(${currStep} / ${totalStep})`}
            </NextButton>
          </Stack>
        )}
      </FormContainer>
    </Container>
  );
}
