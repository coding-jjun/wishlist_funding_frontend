import React, { ChangeEvent, useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Button, TextField, Modal, Box } from "@mui/material";
import { Address } from "@/types/Address";

interface Props {
  address?: Address;
  onComplete: (data: {
    addrZip: string;
    addrRoad: string;
    addrDetl: string;
  }) => void;
}

export default function Postcode({ address, onComplete }: Props) {
  const [addrZip, setAddrZip] = useState<string>(address?.addrZip || "");
  const [addrRoad, setAddrRoad] = useState<string>(address?.addrRoad || "");
  const [addrDetl, setAddrDetl] = useState<string>(address?.addrDetl || "");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setAddrZip(address?.addrZip || "");
    setAddrRoad(address?.addrRoad || "");
    setAddrDetl(address?.addrDetl || "");
  }, [address]);

  useEffect(() => {
    onComplete({
      addrZip,
      addrRoad,
      addrDetl,
    });
  }, [addrZip, addrRoad, addrDetl]);

  const postCodeStyle = {
    height: "480px",
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddrDetl(e.target.value);
  };

  const handleComplete = (data: any) => {
    const { zonecode, roadAddress } = data;
    setAddrZip(zonecode);
    setAddrRoad(roadAddress);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Box display="flex" width="100%">
        {/*우편번호*/}
        <TextField
          value={addrZip}
          disabled={true}
          placeholder="우편번호"
          margin="dense"
          size="small"
          sx={{
            flexGrow: 7,
            borderRadius: 4,
            backgroundColor: "#F8F8F8",
          }}
        />
        <Button sx={{ flexGrow: 3 }} onClick={openModal}>
          주소 찾기
        </Button>
      </Box>
      {/*주소검색 모달*/}
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
        </Box>
      </Modal>

      {/*도로명 주소*/}
      <TextField
        value={addrRoad}
        fullWidth
        disabled={true}
        placeholder="도로명 주소"
        margin="dense"
        size="small"
        sx={{
          borderRadius: 4,
          backgroundColor: "#F8F8F8",
        }}
      />

      {/*상세주소*/}
      <TextField
        value={addrDetl}
        onChange={handleChange}
        placeholder="상세주소"
        fullWidth
        margin="dense"
        size="small"
        sx={{
          mb: 2,
          borderRadius: 4,
          backgroundColor: "#F8F8F8",
        }}
      />
    </div>
  );
}
