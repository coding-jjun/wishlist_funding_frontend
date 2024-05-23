"use client";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

interface Props {
  children: React.ReactNode;
}

const BottomFixedStack = styled(Stack)(() => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  boxSizing: "border-box",
  height: 65,
  padding: 10,
  borderTop: "1px solid #eeeeee",
  backgroundColor: "white",
  zIndex: 100,
}));

export default function ActionBar({ children }: Props) {
  return (
    <BottomFixedStack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
    >
      {children}
    </BottomFixedStack>
  );
}
