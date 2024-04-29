"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box, TextField, Button, ButtonGroup, Modal } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import addComma from "@/utils/addComma";
import { ChangeEvent, useState } from "react";
import ThemeButtonGroup from "@/components/theme/components/ThemeButtonGroup";
import GiftDto from "@/types/GiftDto";
import { DetailActionBar } from "@/components/layout/action-bar";
import useFundingCreateQuery from "@/query/useFundingCreatQuery";
import { CreateFundingDto } from "@/types/CreateFundingDto";
import DragGifts from "@/components/DragGifts";
import { KeyboardArrowDown } from "@mui/icons-material";
import AddressList from "@/components/AddressList";

export default function FundingCreationPage() {
  const formData: GiftDto = { giftUrl: "", giftOpt: "", giftCont: "" };

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [pub, setPub] = useState<boolean>(true);
  const [endDate, setEndDate] = useState(dayjs());
  const [theme, setTheme] = useState<string>("");
  const [formDataList, setFormDataList] = useState<GiftDto[]>([formData]);
  const { mutate } = useFundingCreateQuery();
  const [showMe, setShowMe] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function giftsToggle() {
    setShowMe(!showMe);
  }

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

  const handleChange = (index: number, key: keyof GiftDto, value: string) => {
    const newFormDataList = [...formDataList];
    newFormDataList[index][key] = value;
    setFormDataList(newFormDataList);
  };

  const body: CreateFundingDto = {
    fundTitle: title,
    fundCont: content,
    fundPubl: pub,
    fundTheme: theme,
    fundGoal: amount,
    endAt: endDate.toDate(),
    fundImg:
      "https://img.danawa.com/prod_img/500000/924/538/img/28538924_1.jpg?_v=20231006030836",
    gifts: formDataList,
  };

  const handleSubmit = () => {
    mutate(body);
    setTitle("");
    setContent("");
    setPub(true);
    setEndDate(dayjs());
    setTheme("");
    setAmount(0);
    setFormDataList([]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <ButtonGroup fullWidth>
        {["전체공개", "친구공개"].map((label, index) => (
          <Button
            key={index}
            onClick={() => handlePublicityChange(index === 0)}
            variant={pub === (index === 0) ? "contained" : "outlined"}
          >
            {label}
          </Button>
        ))}
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
      <ThemeButtonGroup fullWidth>
        {[
          { label: "생일", value: "Birthday" },
          { label: "기념일", value: "Anniversary" },
          { label: "후원", value: "Donation" },
        ].map((themes, index) => (
          <Button key={index} onClick={() => handleThemeChange(themes.value)}>
            {themes.label}
          </Button>
        ))}
      </ThemeButtonGroup>

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

      {/*gift item*/}
      <Button startIcon={<KeyboardArrowDown />} onClick={giftsToggle}>
        선물 리스트 임시 토글
      </Button>
      <div style={{ display: showMe ? "block" : "none" }}>
        <h5>ITEMS</h5>
        <DragGifts />
      </div>

      {/*배송지*/}
      <div style={{ paddingBottom: 80 }}>
        <h5>배송지</h5>
        <Button onClick={openModal}>선택</Button>
        <Modal open={isModalOpen} onClose={closeModal}>
          <Box
            sx={{
              position: "absolute",
              width: 400,
              bgcolor: "background.paper",
              border: "1px solid grey",
              boxShadow: 24,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              p: 2,
            }}
          >
            <AddressList />
          </Box>
        </Modal>
      </div>

      <DetailActionBar buttonText="작성하기" handleSubmit={handleSubmit} />
    </>
  );
}
