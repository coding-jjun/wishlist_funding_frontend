import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@mui/material";
import ThemeButtonGroup from "@/components/theme/components/ThemeButtonGroup";

interface Props {
  themes: { label: string; value: string }[];
}
export default function ThemeButtons({ themes }: Props) {
  const { register, setValue } = useFormContext();

  const handleThemeChange = (selectedTheme: string) => {
    setValue("fundTheme", selectedTheme);
  };

  return (
    <ThemeButtonGroup fullWidth>
      {themes.map((theme, index) => (
        <Button key={index} onClick={() => handleThemeChange(theme.value)}>
          {theme.label}
        </Button>
      ))}
    </ThemeButtonGroup>
  );
}
