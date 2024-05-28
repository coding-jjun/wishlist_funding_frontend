import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactNode;
}

export const BottomSheet = ({ isOpen, onClose, title, body }: Props) => {
  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
      transitionDuration={200}
      PaperProps={{ style: { borderRadius: "15px 15px 0 0" } }}
    >
      <Box
        sx={{
          padding: 2,
          height: "60vh",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight={700}>
              {title ?? "필터"}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1 }}>{body}</Box>
        </Box>
      </Box>
    </Drawer>
  );
};
