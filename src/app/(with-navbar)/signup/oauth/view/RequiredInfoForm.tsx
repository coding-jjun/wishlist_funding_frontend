import React from "react";
import SectionTitle from "@/app/(with-navbar)/signup/view/SectionTitle";
import NameField from "@/app/(with-navbar)/signup/view/input/NameField";
import NicknameField from "@/app/(with-navbar)/signup/view/input/NicknameField";
import EmailField from "@/app/(with-navbar)/signup/view/input/EmailField";
import PhoneNumberField from "@/app/(with-navbar)/signup/view/input/PhoneNumberField";

export default function RequiredInfoForm() {
  return (
    <>
      <SectionTitle>필수 정보를 입력해주세요.</SectionTitle>
      <NameField />
      <NicknameField />
      <EmailField />
      <PhoneNumberField />
    </>
  );
}
