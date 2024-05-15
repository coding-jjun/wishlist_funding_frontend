import React, { useState } from "react";
import {
  Button,
  TextField,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormHelperText,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import Postcode from "@/components/Postcode";
import { ArrowBack } from "@mui/icons-material";

interface Props {
  onClose: () => void;
}

export default function AddAddress({ onClose }: Props) {
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: SelectChangeEvent) => {
    setMessage(e.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <ArrowBack />
          </IconButton>
          <Typography
            fontWeight={500}
            fontSize={18}
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            새 배송지 등록
          </Typography>
          <ArrowBack style={{ visibility: "hidden" }} />
        </Toolbar>
      </AppBar>
      <div>
        <FormHelperText>배송지 명</FormHelperText>
        <TextField
          fullWidth
          margin="dense"
          size="small"
          sx={{
            mb: 2,
            borderRadius: 4,
            backgroundColor: "#F8F8F8",
          }}
        />
        <FormHelperText>받는 분</FormHelperText>
        <TextField
          fullWidth
          margin="dense"
          size="small"
          sx={{
            mb: 2,
            borderRadius: 4,
            backgroundColor: "#F8F8F8",
          }}
        />
        <FormHelperText>받는 곳</FormHelperText>
        <Postcode />
        <FormHelperText>휴대폰번호</FormHelperText>
        <TextField
          fullWidth
          type="number"
          margin="dense"
          size="small"
          sx={{
            mb: 2,
            borderRadius: 4,
            backgroundColor: "#F8F8F8",
          }}
        />
        <FormHelperText>배송 시 요청사항</FormHelperText>
        <Select
          value={message}
          onChange={handleChange}
          displayEmpty
          fullWidth
          size="small"
          sx={{
            mb: 3,
            borderRadius: 3,
            backgroundColor: "#F8F8F8",
          }}
        >
          <MenuItem value="">
            <em>배송 시 요청사항</em>
          </MenuItem>
          <MenuItem value={0}>부재 시 경비실에 맡겨주세요</MenuItem>
          <MenuItem value={1}>배송 전에 꼭 연락주세요</MenuItem>
          <MenuItem value={2}>집 앞에 놔주세요</MenuItem>
          <MenuItem value={3}>택배함에 놔주세요</MenuItem>
          <MenuItem value={4}>직접입력</MenuItem>
        </Select>
      </div>
      <Button variant="contained" fullWidth>
        확인
      </Button>
    </>
  );
}
