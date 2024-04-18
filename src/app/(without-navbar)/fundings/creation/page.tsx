"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box, TextField, styled, Button, ButtonGroup } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import addComma from "@/utils/addComma";
import { ChangeEvent, useState } from "react";
import { red } from "@mui/material/colors";

export default function FundingCreationPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState(0);
  const [pub, setPub] = useState(true);
  const [endDate, setEndDate] = useState(dayjs());
  const [theme, setTheme] = useState("");

  const CustomButtonGroup = styled(ButtonGroup)({
    marginTop: "15px",
    marginBottom: "15px",
    "& .MuiButton-outlined": {
      borderColor: red[100],
      margin: "5px",
      borderRadius: "20px",
    },
    "& .MuiButton-outlined:hover": {
      borderColor: red[300],
      backgroundColor: red[300],
      color: "#fff",
    },
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    let strVal = inputVal.replaceAll(",", "");
    setAmount(Number(strVal));
  };

  const handlePublicityChange = (isPublic: boolean) => {
    setPub(isPublic);
  };

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    if (date) {
      const endDateToServer: Dayjs = date;
      setEndDate(endDateToServer);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/funding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fundTitle: title,
          fundCont: content,
          fundPubl: pub,
          fundTheme: theme,
          fundGoal: amount,
          fundImg:
            "https://img.danawa.com/prod_img/500000/924/538/img/28538924_1.jpg?_v=20231006030836",
        }),
      });
      if (response.ok) {
        console.log("👌🏻펀딩 생성 성공");
      } else {
        console.error("❌펀딩 생성 실패");
      }
    } catch (error) {
      console.error("❌펀딩 생성 중 에러 발생..", error);
    }
  };

  return (
    <>
      <h2>펀딩 개설</h2>
      {/*제목/내용*/}
      <Box>
        <TextField
          fullWidth
          label="제목"
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          fullWidth
          label="내용"
          multiline
          rows={4}
          margin="normal"
          value={content}
          onChange={handleContChange}
        />
      </Box>

      {/*공개범위*/}
      <ButtonGroup variant="outlined" fullWidth>
        <Button onClick={() => handlePublicityChange(true)}>전체공개</Button>
        <Button onClick={() => handlePublicityChange(false)}>친구공개</Button>
      </ButtonGroup>

      {/*마감기한*/}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="마감기한">
            <DatePicker
              value={endDate}
              onChange={handleEndDateChange}
              disablePast
              views={["year", "month", "day"]}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

      {/*테마*/}
      <CustomButtonGroup variant="outlined" fullWidth>
        <Button onClick={() => handleThemeChange("Birthday")}>생일</Button>
        <Button onClick={() => handleThemeChange("Anniversary")}>기념일</Button>
        <Button onClick={() => handleThemeChange("Donation")}>후원</Button>
      </CustomButtonGroup>

      {/*금액*/}
      <Box marginTop="10px">
        <TextField
          fullWidth
          label="금액"
          type="text"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            onChange: handleAmountChange,
          }}
          value={addComma(amount) || 0}
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        style={{ marginTop: "30px" }}
      >
        펀딩 생성
      </Button>
    </>
  );
}
