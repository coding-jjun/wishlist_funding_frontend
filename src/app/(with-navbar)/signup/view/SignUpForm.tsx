import React, { ReactNode } from "react";
import { ArrowBackIosNew as ArrowBackIosNewIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { TopFixedStack } from "@/components/layout/action-bar/TopFixedStack";

interface Props {
  title: string;
  currStep: number;
  totalStep: number;
  formContent: ReactNode;
  onPrev: () => void;
  onNext: () => void;
}

export default function SignUpForm({
  title,
  currStep,
  totalStep,
  formContent,
  onPrev,
  onNext,
}: Props) {
  return (
    <Container>
      <TopFixedStack direction="row" alignItems="center">
        <IconButton onClick={onPrev}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </TopFixedStack>
      <Title>
        <Typography
          variant="h5"
          component="h1"
          sx={{ my: "20px", fontWeight: 700 }}
        >
          {title}
        </Typography>
      </Title>
      <FormContainer>
        {formContent}
        {currStep === totalStep ? (
          <Stack direction="row" justifyContent="space-between">
            <NextButton
              variant="outlined"
              color="secondary"
              onClick={onNext}
              sx={{ width: "35%" }}
            >
              건너뛰기
            </NextButton>
            <NextButton
              variant="contained"
              color="secondary"
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

        {/*<NextButton*/}
        {/*  variant="contained"*/}
        {/*  color="secondary"*/}
        {/*  onClick={onNext}*/}
        {/*  sx={{ width: "40%" }}*/}
        {/*>*/}
        {/*  {`다음(${currStep} / ${totalStep})`}*/}
        {/*</NextButton>*/}
      </FormContainer>
    </Container>
  );
}

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100vh",
  backgroundColor: "#fff",
});

const Title = styled(Box)({
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "90%",
});

const NextButton = styled(Button)({
  marginTop: "30px",
  marginBottom: "20px",
  borderRadius: "10px",
  padding: "12px",
});
