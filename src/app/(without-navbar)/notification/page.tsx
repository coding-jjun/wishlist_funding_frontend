"use client";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import { useRouter } from "next/navigation";
import NotificationComponent from "@/app/(without-navbar)/notification/view/NotificationComponent";

export default function AlarmHistoryPage() {
  const router = useRouter();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: "#fff", py: 2, pl: 1 }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="back"
          onClick={() => router.back()}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography fontWeight={700} variant="h5">
          알림
        </Typography>
      </Toolbar>
      <Box>
        <NotificationComponent />
      </Box>
    </AppBar>
  );
}
