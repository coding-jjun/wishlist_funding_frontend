"use client";

import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  FormHelperText,
  Grid,
  IconButton,
  SwipeableDrawer,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DetailActionBar } from "@/components/layout/action-bar";
import useFundingCreateQuery from "@/query/useFundingCreatQuery";
import { useRouter } from "next/navigation";
import DragGifts from "@/components/DragGifts";
import {
  ArrowBack,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import AddressList from "@/components/address/AddressList";
import TextInput from "@/components/input/TextInput";
import PublicButtons from "@/components/input/PublicButtons";
import DeadlineCalendar from "@/components/input/DeadlineCalendar";
import ThemeButtons from "@/components/input/ThemeButtons";
import AmountInput from "@/components/input/AmountInput";
import { themeOptions } from "@/types/Theme";
import { Funding, FundingForm } from "@/types/Funding";
import GiftDto from "@/types/GiftDto";

import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Global } from "@emotion/react";
import { Address } from "@/types/Address";
import useAddressesQuery from "@/query/useAddressesQuery";

interface Props {
  window?: () => Window;
}

const drawerBleeding = 56;

const Root = styled("div")(() => ({
  height: "100%",
}));

// 바텀시트 박스
const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  borderRadius: "8px 8px 0 0",
}));

// 바텀시트 막대기
const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: -40,
  left: "calc(50% - 15px)",
}));

const formData: GiftDto = {
  id: 1,
  giftOrd: 1,
  giftUrl: "",
  giftOpt: "",
  giftCont: "",
};

function getInitialGifts() {
  return [formData];
}

export default function FundingCreationPage(props: Props) {
  const router = useRouter();
  {
    /*TODO: 사용자 기능 추가되면 userId 수정 필요*/
  }
  const userId: number = 1;
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const { data: addresses } = useAddressesQuery(userId);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const setAddressValues = (address: Address) => {
    const fundAddr = `${address.addrRoad} ${address.addrDetl} (${address.addrZip})`;
    methods.setValue("fundRecvName", address.recvName);
    methods.setValue("fundRecvPhone", address.recvPhone);
    methods.setValue("fundAddr", fundAddr);
  };

  useEffect(() => {
    if (addresses) {
      const defaultAddress = addresses.find((addr) => addr.isDef);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress);
        setAddressValues(defaultAddress);
      }
    }
  }, [addresses]);

  useEffect(() => {
    if (selectedAddress) {
      setAddressValues(selectedAddress);
    }
  }, [selectedAddress]);

  const methods = useForm<FundingForm>();
  const [gifts, setGifts] = useState<GiftDto[]>(getInitialGifts);

  useEffect(() => {
    methods.setValue("gifts", gifts);
  }, [methods.setValue]);

  const { mutate } = useFundingCreateQuery();

  const [showItems, setShowItems] = useState<boolean>(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenBottomSheet(newOpen);
  };

  const toggleGifts = () => {
    setShowItems(!showItems);
  };

  const onSubmit = (body: any) => {
    /*TODO: 기프트 이미지 기능 추가 필요*/
    body.fundImg = [
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
    ];
    body.fundGoal = Number(body.fundGoal.replaceAll(",", ""));
    const { fundAddrZip, fundAddrRoad, fundAddrDetl, ...rest } = body;
    const submitData = {
      ...rest,
      fundAddrZip: selectedAddress?.addrZip,
      fundAddrRoad: selectedAddress?.addrRoad,
      fundAddrDetl: selectedAddress?.addrDetl,
      fundRecvName: selectedAddress?.recvName,
      fundRecvPhone: selectedAddress?.recvPhone,
      fundRecvReq: selectedAddress?.recvReq,
    };
    mutate(submitData, {
      onSuccess: (data) => {
        router.push(`/fundings/${data.data.fundUuid}`);
      },
    });

    methods.reset();
  };

  return (
    <>
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(85% - ${drawerBleeding}px)`,
              overflow: "visible",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            },
          }}
        />
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#fff" }}>
          <Toolbar>
            <IconButton edge="start" aria-label="back">
              <ArrowBack color="primary" />
            </IconButton>
            <Typography
              fontWeight={700}
              variant="h6"
              color="primary"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              펀딩 등록
            </Typography>
            <ArrowBack style={{ visibility: "hidden" }} />
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: 2, mt: 8 }}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <TextInput />
                <PublicButtons />
                <DeadlineCalendar />
                <ThemeButtons themes={themeOptions} />
                <AmountInput />

                {/*기프트 아이템*/}
                <Grid item xs={12}>
                  <Button
                    startIcon={
                      showItems ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                    }
                    onClick={toggleGifts}
                    sx={{
                      color: "#F6B70B",
                      fontWeight: "bold",
                    }}
                  >
                    ITEMS
                  </Button>
                  <div style={{ display: showItems ? "block" : "none" }}>
                    <DragGifts gifts={gifts} setGifts={setGifts} />
                  </div>
                </Grid>

                {/*배송지*/}
                <Grid item xs={12}>
                  <FormHelperText
                    sx={{
                      my: 1,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    배송지 정보
                  </FormHelperText>
                  <Box display="flex" width="100%">
                    <TextField
                      {...methods.register("fundRecvName")}
                      disabled
                      size="small"
                      sx={{ flex: 3 }}
                    />
                    <TextField
                      {...methods.register("fundRecvPhone")}
                      disabled
                      size="small"
                      sx={{ flex: 6, marginLeft: 0.5 }}
                    />
                    <Button
                      sx={{ flex: 1, marginLeft: 0.5 }}
                      onClick={toggleDrawer(true)}
                    >
                      변경
                    </Button>
                  </Box>
                  <Box display="flex" width="100%" sx={{ mt: 0.5, mb: 9 }}>
                    <TextField
                      {...methods.register("fundAddr")}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ flex: 9 }}
                      size="small"
                      fullWidth
                      disabled
                    />
                  </Box>
                  <SwipeableDrawer
                    container={container}
                    anchor="bottom"
                    open={openBottomSheet}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={0}
                    disableSwipeToOpen={true}
                    ModalProps={{
                      keepMounted: false,
                    }}
                  >
                    <StyledBox
                      sx={{
                        position: "absolute",
                        top: drawerBleeding,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                      }}
                    >
                      <Puller />
                    </StyledBox>
                    <StyledBox
                      sx={{
                        pt: 5,
                        pb: 2,
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <AddressList
                        addresses={addresses}
                        userId={userId}
                        onSelectAddress={(address) => {
                          setSelectedAddress(address);
                          setOpenBottomSheet(false);
                        }}
                      />
                    </StyledBox>
                  </SwipeableDrawer>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Box>
      </Root>
      <div style={{ display: openBottomSheet ? "none" : "block" }}>
        <DetailActionBar
          buttonText="작성하기"
          handleSubmit={methods.handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
}
