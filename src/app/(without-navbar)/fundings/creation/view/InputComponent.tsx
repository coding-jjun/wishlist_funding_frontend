import TextInput from "@/components/input/TextInput";
import PublicButtons from "@/components/input/PublicButtons";
import DeadlineCalendar from "@/components/input/DeadlineCalendar";
import ThemeButtons from "@/components/input/ThemeButtons";
import { themeOptions } from "@/types/Theme";
import AmountInput from "@/components/input/AmountInput";
import React from "react";

export default function InputComponent() {
  return (
    <>
      <TextInput />
      <PublicButtons />
      <DeadlineCalendar />
      <ThemeButtons themes={themeOptions} />
      <AmountInput />
    </>
  );
}
