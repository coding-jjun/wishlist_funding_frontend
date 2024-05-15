"use client";
import { grey } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import "./font.css";

export default function Logo() {
  const router = useRouter();

  const goToMain = () => {
    router.push("/");
  };

  return (
    <Button onClick={goToMain} variant="text" sx={{ padding: 0 }}>
      <Typography
        variant="h5"
        fontWeight={700}
        color={grey[800]}
        fontFamily={"yg-jalnan"}
      >
        기프투게더
      </Typography>
    </Button>
  );
}
