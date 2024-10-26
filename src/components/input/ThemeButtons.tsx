import React from "react";
import { useFormContext } from "react-hook-form";
import { Box, Button, FormHelperText, Grid } from "@mui/material";
import ThemeButtonGroup from "@/components/theme/components/ThemeButtonGroup";

interface Props {
  themes: {
    label: string;
    value: string;
    icon: string;
  }[];
}
export default function ThemeButtons({ themes }: Props) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedTheme = watch("fundTheme");

  const handleThemeChange = (themeValue: string) => {
    setValue("fundTheme", themeValue, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <Grid item xs={12}>
      {/* 테마 라벨 */}
      <FormHelperText sx={{ color: errors.fundTheme && "#d32f2f" }}>
        테마
      </FormHelperText>

      {/* 테마 선택 영역 */}
      <Box
        sx={{
          border: errors.fundTheme
            ? "1px solid #d32f2f"
            : "1px solid transparent",
          borderRadius: "20px",
          pt: errors.fundTheme && "8px",
          px: errors.fundTheme && "5px",
        }}
      >
        <ThemeButtonGroup fullWidth>
          {themes.map((theme, index) => (
            <Button
              key={index}
              onClick={() => handleThemeChange(theme.value)}
              style={{
                borderColor: theme.value === selectedTheme ? "#4F4635" : "#fff",
                backgroundColor:
                  theme.value === selectedTheme ? "#fff" : "#fff",
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
      </Box>

      {/* 유효성 검사 에러 메세지 */}
      <input
        type="hidden"
        {...register("fundTheme", { required: "테마를 선택해주세요." })}
      />
      {errors.fundTheme && (
        <FormHelperText error>
          {errors.fundTheme?.message?.toString() || ""}
        </FormHelperText>
      )}
    </Grid>
  );
}
