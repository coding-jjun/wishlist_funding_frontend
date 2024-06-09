"use client";

import React from "react";
import {
  Card as MaterialCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ProgressBarWithText from "@/components/progress/ProgressBarWithText";
import { FundTheme, getFundThemeValue } from "@/types/Funding.enum";

interface CardProps {
  image: string;
  userId: string;
  title: string;
  theme: FundTheme;
  endDate: string;
  progress: number;
  handleClick: () => void;
}

export default function VerticalImgCard({
  image,
  userId,
  title,
  theme,
  endDate,
  progress,
  handleClick,
}: CardProps) {
  return (
    <MaterialCard variant="outlined" sx={{ borderRadius: 5 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Card Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {userId} | {getFundThemeValue(theme)}
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
            progress={progress}
            endDate={endDate}
            textSize="body2"
          />
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}
