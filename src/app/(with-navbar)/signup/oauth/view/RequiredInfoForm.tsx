import React from "react";
import SectionTitle from "@/app/(with-navbar)/signup/view/SectionTitle";
import NameField from "@/app/(with-navbar)/signup/view/input/NameField";
import NicknameField from "@/app/(with-navbar)/signup/view/input/NicknameField";
import EmailField from "@/app/(with-navbar)/signup/view/input/EmailField";
import PhoneNumberField from "@/app/(with-navbar)/signup/view/input/PhoneNumberField";
import { UserDto } from "@/types/User";

interface Props {
  user?: UserDto;
}

export default function RequiredInfoForm({ user }: Props) {
  return (
    <>
      <SectionTitle>필수 정보를 입력해주세요.</SectionTitle>
      <NameField />
      <NicknameField myNickname={user?.userNick} />
      <PhoneNumberField myPhoneNumber={user?.userPhone} />
    </>
  );
}
