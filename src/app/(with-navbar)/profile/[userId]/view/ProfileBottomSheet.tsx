import React, { ChangeEvent, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { grey } from "@mui/material/colors";
import useUploadImage from "@/hook/useUploadImage";
import { CoverImage } from "@/components/image";

interface Props {
  userId: number | undefined;
  handleClose: () => void;
  handleSubmit: (userImg: string) => void;
}

// TODO: 디폴트 이미지 조회 로직 추가
const defaultImages = [
  "/dummy/slide1.avif",
  "/dummy/slide2.avif",
  "/dummy/slide3.avif",
  "/dummy/slide4.avif",
];

const ProfileBottomSheet = ({ userId, handleClose, handleSubmit }: Props) => {
  const { uploadImages } = useUploadImage();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setUploadedImages((prev) => [...prev, reader.result as string]);
          setSelectedImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onClickSubmit = async () => {
    const file = inputRef.current?.files?.[0];
    if (file) {
      const imgUrls = await uploadImages([file]);
      handleSubmit(imgUrls[0]);
    }
    handleClose();
  };

  return (
    <Wrapper>
      <Typography variant="body2" fontWeight={700} color="#9e9e9e">
        앨범에서 업로드
      </Typography>
      <Grid container spacing={1} sx={{ mt: 1, mb: 4 }}>
        <Grid item xs={3}>
          <UploadBox onClick={() => inputRef.current?.click()}>
            <CameraAltIcon />
          </UploadBox>
          <input
            ref={inputRef}
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </Grid>
        {uploadedImages.map((url, index) => (
          <Grid
            item
            xs={3}
            key={url}
            onClick={() => setSelectedImage(url)}
            sx={{ position: "relative" }}
          >
            <CoverImage
              src={url}
              alt={`default_image_${index}`}
              parentDivStyle={{ width: "100%", height: "100%" }}
            />
            {selectedImage === url && (
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  top: "12px",
                  right: "5px",
                  color: "green",
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>
      <Typography variant="body2" fontWeight={700} color="#9e9e9e">
        기본 이미지 중 선택
      </Typography>
      <Grid container spacing={1} sx={{ mt: 1, mb: 4 }}>
        {defaultImages.map((url, index) => (
          <Grid
            item
            xs={3}
            key={url}
            onClick={() => setSelectedImage(url)}
            sx={{ position: "relative" }}
          >
            <CoverImage
              src={url}
              alt={`default_image_${index}`}
              parentDivStyle={{ width: "100%", height: "100%" }}
            />
            {selectedImage === url && (
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  top: "12px",
                  right: "5px",
                  color: "green",
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>
      <ApplyButton
        variant="contained"
        size="large"
        onClick={onClickSubmit}
        color="secondary"
      >
        적용하기
      </ApplyButton>
    </Wrapper>
  );
};

export default ProfileBottomSheet;

const Wrapper = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const UploadBox = styled(Box)({
  backgroundColor: grey[300],
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  aspectRatio: "1 / 1",
});

const ApplyButton = styled(Button)({
  width: "100%",
  marginTop: "auto",
});
