"use client";
import React from "react";
import { Control, Controller, useFormContext } from "react-hook-form";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { koKR } from "@mui/x-date-pickers/locales";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { FormControl, Stack, styled, Typography } from "@mui/material";
import BankSelectBar from "@/app/(with-navbar)/signup/view/BankSelectBar";
import { ProfileImage } from "@/components/avatar";
import { CreateUserDto, CreateUserForm } from "@/types/User";
import SignUpForm from "@/app/(with-navbar)/signup/view/SignUpForm";
import { GreyTextField } from "@/components/textfield";
import useAddUser from "@/query/useAddUser";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function AdditionalInfo({ onPrev, onNext }: Props) {
  const { control, handleSubmit, setValue } = useFormContext<CreateUserForm>();
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

  const handleChangeImage = (img: string) => {
    setValue("userImg", img);
  };

  return (
    <SignUpForm
      title="추가 정보를 입력해주세요."
      currStep={4}
      totalStep={4}
      formContent={
        <Stack direction="column" spacing={2}>
          <ProfileImageForm onChangeImage={handleChangeImage} />
          <BirthdayForm control={control} />
          <AccountForm control={control} />
        </Stack>
      }
      onPrev={onPrev}
      onNext={handleSubmit(onSubmit)}
    />
  );
}

const ProfileImageForm = ({
  onChangeImage,
}: {
  onChangeImage: (img: string) => void;
}) => (
  <Stack sx={{ width: "100%" }}>
    <Label>프로필 이미지</Label>
    <ProfileImage
      imgSrc="https://cdn.gukjenews.com/news/photo/202405/2989378_3066370_552.jpg"
      onSubmit={onChangeImage}
    />
  </Stack>
);

const BirthdayForm = ({ control }: { control: Control<CreateUserForm> }) => (
  <FormControl>
    <Label>생일</Label>
    <Controller
      name="userBirth"
      control={control}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ko"
          localeText={
            koKR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <CustomDatePicker
            format="YYYY.MM.DD"
            slotProps={{
              toolbar: { toolbarFormat: "YYYY.MM.DD", hidden: false },
            }}
            onChange={onChange}
            defaultValue={dayjs(new Date())}
            value={dayjs(value)}
            sx={{
              borderRadius: 20,
              "& .MuiDatePickerToolbar-title": { fontSize: "20px" },
            }}
          />
        </LocalizationProvider>
      )}
    />
  </FormControl>
);

const AccountForm = ({ control }: { control: Control<CreateUserForm> }) => (
  <FormControl>
    <Label>계좌번호</Label>
    <Stack direction="column" spacing={1}>
      <BankSelectBar />
      <Controller
        name="userAccNum"
        control={control}
        render={({ field }) => (
          <GreyTextField
            {...field}
            helperText="- 없이 입력해주세요."
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: false }}
          />
        )}
      />
    </Stack>
  </FormControl>
);

const CustomDatePicker = styled(MobileDatePicker)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#d3d3d3" },
    "&:hover fieldset": { borderColor: "#9e9e9e" },
    "&.Mui-focused fieldset": { borderColor: "#9e9e9e" },
    "&.Mui-error fieldset": { borderColor: "#f44336" },
  },
  "& .MuiInputLabel-root": {
    color: "#9e9e9e",
    "&.Mui-focused": { color: "#9e9e9e" },
  },
});

const Label = styled(Typography)({
  variant: "body2",
  fontWeight: 700,
  color: "#9e9e9e",
  marginBottom: "10px",
});
