"use client";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const TopFixedStack = styled(Stack)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 65,
  padding: 10,
  paddingTop: 20,
  boxSizing: "border-box",
  backgroundColor: "white",
  zIndex: 99,
}));
