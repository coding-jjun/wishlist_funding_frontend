"use client";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NotificationComponent from "@/app/(without-navbar)/notification/view/NotificationComponent";
import FilterButtonGroup from "@/components/theme/components/FilterButtonGroup";

export default function AlarmHistoryPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("all");

  const categories = [
    { label: "모두", value: "all" },
    { label: "펀딩", value: "funding" },
    { label: "댓글", value: "comment" },
    { label: "요청", value: "friendRequest" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: "#fff", py: 2, px: 1 }}
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
        <FilterButtonGroup fullWidth>
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setFilter(category.value)}
              style={{
                fontWeight: category.value === filter ? "bold" : "normal",
                backgroundColor: category.value === filter ? "#F5F8FC" : "#fff",
                borderColor: category.value === filter ? "#4F4635" : "#d0d0d0",
                color: category.value === filter ? "#4F4635" : "#4F4635",
                borderWidth: category.value === filter ? "1.5px" : "1px",
              }}
            >
              {category.label}
            </Button>
          ))}
        </FilterButtonGroup>
      </AppBar>
      <Box sx={{ mt: 18 }}>
        <NotificationComponent />
      </Box>
    </>
  );
}
