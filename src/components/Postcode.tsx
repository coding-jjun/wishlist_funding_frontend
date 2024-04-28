import React, { ChangeEvent, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Button, TextField, Modal, Box } from "@mui/material";

export default function Postcode() {
  const [zipcode, setZipcode] = useState<string>("");
  const [roadAddr, setRoadAddr] = useState<string>("");
  const [detailAddr, setDetailAddr] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
    setDetailAddr(e.target.value);
  };

  const handleComplete = (data: any) => {
    const { zonecode, roadAddress } = data;
    setZipcode(zonecode);
    setRoadAddr(roadAddress);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/*우편번호*/}
      <TextField
        value={zipcode}
        disabled={true}
        placeholder="우편번호"
        margin="dense"
      />
      <Button onClick={openModal}>주소 찾기</Button>

      {/*주소검색 모달*/}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
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
        value={roadAddr}
        fullWidth
        disabled={true}
        placeholder="도로명 주소"
        margin="dense"
      />

      {/*상세주소*/}
      <TextField
        margin="dense"
        fullWidth
        onChange={handleChange}
        value={detailAddr}
        placeholder="상세주소"
      />
    </div>
  );
}
