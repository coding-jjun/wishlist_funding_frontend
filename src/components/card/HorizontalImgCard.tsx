import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ProgressBarWithText from "@/components/progress/ProgressBarWithText";

interface Props {
  image: string;
  userId: string;
  title: string;
  theme: string;
  endDate: string;
  progress: number;
}

export default function HorizontalImgCard({
  image,
  userId,
  title,
  theme,
  endDate,
  progress,
}: Props) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 5 }}>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={image}
          alt="펀딩 썸네일"
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="body2" color="text.secondary">
              {userId} | {theme}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              fontWeight="bold"
            >
              {title}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              pb: 1,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <ProgressBarWithText
              progress={progress}
              endDate={endDate}
              textSize="body2"
            />
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
