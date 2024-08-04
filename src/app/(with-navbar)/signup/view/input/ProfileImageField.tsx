import React from "react";
import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ProfileImage } from "@/components/avatar";
import { InputLabel } from "@/app/(with-navbar)/signup/view/input/InputLabel";
import { CreateUserForm } from "@/types/User";

const ProfileImageField = () => {
  const { setValue } = useFormContext<CreateUserForm>();

  const handleChangeImage = (img: string) => {
    setValue("userImg", img);
  };

  return (
    <Stack>
      <InputLabel>프로필 이미지</InputLabel>
      <div>
        <ProfileImage
          // TODO: 하드코딩 제거
          imgSrc="https://cdn.gukjenews.com/news/photo/202405/2989378_3066370_552.jpg"
          onSubmit={handleChangeImage}
        />
      </div>
    </Stack>
  );
};

export default ProfileImageField;
