import calculateDate from "@/utils/calculateDate";
import React from "react";
import {
  Card as MaterialCard,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  LinearProgress,
  Box,
} from "@mui/material";

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
          height="260"
          image={image}
          alt="Card Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {userId} | {theme}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              {progress}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {closingDate()}
            </Typography>
          </Box>
          <LinearProgress
            color="inherit"
            variant="determinate"
            value={progress}
          />
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}