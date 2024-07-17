import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  title?: string;
  showMenuIcon?: boolean; // 햄버거 버튼 표시 여부 제어
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Appbar({
  title,
  showMenuIcon = false,
  onEdit,
  onDelete,
}: Props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="back"
          onClick={() => router.back()}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography
          fontWeight={700}
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {title}
        </Typography>
        {showMenuIcon ? (
          <>
            <IconButton edge="end" aria-label="menu" onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={onEdit}>수정</MenuItem>
              <MenuItem onClick={onDelete}>삭제</MenuItem>
            </Menu>
          </>
        ) : (
          <ArrowBackIosNewIcon visibility={"hidden"} />
        )}
      </Toolbar>
    </AppBar>
  );
}
