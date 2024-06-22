"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import dayjs from "dayjs";
import { Box, Button, Modal, TextField } from "@mui/material";
import GiftDto from "@/types/GiftDto";
import { DetailActionBar } from "@/components/layout/action-bar";
import useFundingCreateQuery from "@/query/useFundingCreatQuery";
import { CreateFundingDto } from "@/types/CreateFundingDto";
import DragGifts from "@/components/DragGifts";
import { KeyboardArrowDown } from "@mui/icons-material";
import AddressList from "@/components/AddressList";
import TextInput from "@/components/input/TextInput";
import PublicButtons from "@/components/input/PublicButtons";
import DeadlineCalendar from "@/components/input/DeadlineCalendar";
import ThemeButtons from "@/components/input/ThemeButtons";
import AmountInput from "@/components/input/AmountInput";
import { themeOptions } from "@/types/Theme";

export default function FundingCreationPage() {
  const methods = useForm();
  const formData: GiftDto = { giftUrl: "", giftOpt: "", giftCont: "" };

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [pub, setPub] = useState<boolean>(true);
  const [endDate, setEndDate] = useState(dayjs());
  const [theme, setTheme] = useState<string>("");
  const [formDataList, setFormDataList] = useState<GiftDto[]>([formData]);
  const { mutate } = useFundingCreateQuery();
  const [showItems, setShowItems] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onSubmit = (body: any) => {
    // mutate(body);
    // setFormDataList([]);
    console.log(body);
  };

  function giftsToggle() {
    setShowItems(!showItems);
  }

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

  const handleSubmit2 = () => {
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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInput />
          <PublicButtons />
          <DeadlineCalendar />
          <ThemeButtons themes={themeOptions} />
          <AmountInput />

          {/*기프트 아이템*/}
          <Button startIcon={<KeyboardArrowDown />} onClick={giftsToggle}>
            ITEMS
          </Button>
          <div style={{ display: showItems ? "block" : "none" }}>
            <DragGifts />
          </div>

          {/*배송지*/}
          <div>
            <h5>배송지</h5>
            <TextField fullWidth />
            <TextField fullWidth margin="dense" />
            <Button onClick={openModal} variant="outlined">
              변경
            </Button>
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

          <div style={{ paddingBottom: 80 }}>
            <Button variant="contained" type="submit" fullWidth>
              작성하기
            </Button>
          </div>
        </form>
      </FormProvider>

      <DetailActionBar buttonText="작성하기" handleSubmit={handleSubmit2} />
    </>
  );
}
