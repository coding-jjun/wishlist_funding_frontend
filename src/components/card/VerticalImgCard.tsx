"use client";

import calculateDate from "@/utils/calculateDate";
import React from "react";
import {
  Box,
  Card as MaterialCard,
  CardActionArea,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import ProgressBarWithText from "@/components/progress/ProgressBarWithText";

interface CardProps {
  image: string;
  userId: string;
  title: string;
  theme: string;
  endDate: string;
  progress: number;
}

export default function VerticalImgCard({
  image,
  userId,
  title,
  theme,
  endDate,
  progress,
}: CardProps) {
  const currentDate = new Date();
  const remainingDays = calculateDate(currentDate, endDate);

  const closingDate = () => {
    if (remainingDays > 0) return `${remainingDays}일 남음`;
    else if (remainingDays === 0) return "오늘 마감";
    else return "만료됨";
  };

  return (
    <MaterialCard variant="outlined" sx={{ borderRadius: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Card Image"
        />
        <CardContent>
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
          <ProgressBarWithText
            progress={70}
            endDate={new Date(2024, 4, 20, 12).toString()}
            textSize="body2"
          />
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}
