import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, TextField } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import GiftDto from "@/types/GiftDto";
import DragHandler from "@/components/dragndrop/DragHandler";
import axios from "axios";

interface GiftItemProps {
  id: number;
  index: number;
  gifts: GiftDto[];
  onDelete: () => void;
}

interface MetadataResponse {
  title?: string;
  description?: string;
  image?: string;
}

export default function GiftItem({
  id,
  index,
  gifts,
  onDelete,
}: GiftItemProps) {
  const { register, setValue, control } = useFormContext();
  const giftUrl = useWatch({
    control,
    name: `gifts[${index - 1}].giftUrl`,
  });

  const DUMMY: string = "/dummy/present.png";

  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    // url 지우면 기존에 있던 썸네일도 제거
    if (giftUrl === "") {
      setThumbnail(null);
      return;
    }

    if (giftUrl) {
      const fetchMetadata = async () => {
        try {
          const response = await axios.post<MetadataResponse>(
            "/server/metadata",
            {
              url: giftUrl,
            },
          );
          console.log("Fetched metadata from API:", response.data);
          const imageUrl = response.data.image || null;
          setThumbnail(response.data.image || DUMMY);
          setValue(`gifts[${index - 1}].giftImg`, imageUrl);
        } catch (error) {
          console.error("metadata를 불러오는데 실패했어요.", error);
          setThumbnail(DUMMY);
          setValue(`gifts[${index - 1}].giftImg`, null);
        }
      };

      fetchMetadata();
    }
  }, [giftUrl, setValue]);

  return (
    <Card
      sx={{
        borderRadius: 5,
        boxShadow: "5px 15px 15px rgba(0,0,0,0.05)",
        marginBottom: "15px",
      }}
    >
      <CardContent>
        <DragHandler gifts={gifts} id={id} onDelete={onDelete} />

        {/*썸네일*/}
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          {thumbnail && (
            <Box
              component="img"
              src={thumbnail}
              sx={{
                width: "100%",
                height: "auto",
                marginTop: 2,
                borderRadius: 2,
              }}
            />
          )}
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <TextField
            {...register(`gifts[${index - 1}].giftUrl`)}
            placeholder="url"
            size="small"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              borderRadius: 4,
              backgroundColor: "#ECF0EF",
            }}
          />
          <TextField
            {...register(`gifts[${index - 1}].giftOpt`)}
            placeholder="제품 옵션"
            size="small"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              borderRadius: 4,
              backgroundColor: "#ECF0EF",
            }}
          />
          <TextField
            {...register(`gifts[${index - 1}].giftCont`)}
            placeholder="상품 설명"
            size="small"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              borderRadius: 4,
              backgroundColor: "#ECF0EF",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
