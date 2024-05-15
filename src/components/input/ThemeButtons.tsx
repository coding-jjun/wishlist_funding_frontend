import React from "react";
import { useFormContext } from "react-hook-form";
import { Button, FormHelperText, Grid } from "@mui/material";
import ThemeButtonGroup from "@/components/theme/components/ThemeButtonGroup";

interface Props {
  themes: {
    label: string;
    value: string;
    icon: string;
  }[];
}
export default function ThemeButtons({ themes }: Props) {
  const { setValue, watch } = useFormContext();
  const selectedTheme = watch("fundTheme");

  const handleThemeChange = (themeValue: string) => {
    setValue("fundTheme", themeValue, { shouldDirty: true });
  };

  return (
    <Grid item xs={12}>
      <FormHelperText>테마</FormHelperText>
      <ThemeButtonGroup fullWidth>
        {themes.map((theme, index) => (
          <Button
            key={index}
            onClick={() => handleThemeChange(theme.value)}
            style={{
              borderColor: theme.value === selectedTheme ? "#4F4635" : "#fff",
              backgroundColor: theme.value === selectedTheme ? "#fff" : "#fff",
            }}
          >
            <img
              src={theme.icon}
              alt={theme.label}
              width={25}
              height={25}
              style={{ marginRight: 8 }}
            />
            {theme.label}
          </Button>
        ))}
      </ThemeButtonGroup>
    </Grid>
  );
}
