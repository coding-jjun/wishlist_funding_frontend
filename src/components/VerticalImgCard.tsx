"use client";

import calculateDate from "@/utils/calculateDate";
import React from "react";
import {
  styled,
  Card as MaterialCard,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  LinearProgress,
  Box,
} from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFC2C7" : "#E6E6E6",
  },
}));

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
          height="250"
          image={image}
          alt="Card Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {userId} | {theme}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="#FF626F" fontWeight="bold">
              {progress}%
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="medium"
            >
              {closingDate()}
            </Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={progress} />
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}
