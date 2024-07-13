import { Button, Grid } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import DragGifts from "@/components/DragGifts";
import React, { useState } from "react";
import GiftDto from "@/types/GiftDto";

interface Props {
  gifts: GiftDto[];
  setGifts: (updateFunction: (currentGifts: GiftDto[]) => GiftDto[]) => void;
}

export default function GiftComponent({ gifts, setGifts }: Props) {
  const [showItems, setShowItems] = useState<boolean>(true);
  const toggleGifts = () => {
    setShowItems(!showItems);
  };

  return (
    <Grid item xs={12}>
      <Button
        startIcon={showItems ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
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
  );
}
