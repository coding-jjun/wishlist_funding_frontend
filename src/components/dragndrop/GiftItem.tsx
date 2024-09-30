import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, IconButton, TextField } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import GiftDto from "@/types/GiftDto";
import DragHandler from "@/components/dragndrop/DragHandler";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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

  const DUMMY: string = "/dummy/present.webp";

  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isPrimary, setIsPrimary] = useState<boolean>(false); // 대표 이미지 상태

  useEffect(() => {
    // url 지우면 기존에 있던 썸네일도 제거
    if (giftUrl === "") {
      setThumbnail(null);
      setIsPrimary(false);
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
          console.log("Ⓜ️ 메타데이터:", response.data);
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

  // 대표이미지 설정하는 함수
  const handleSetPrimary = () => {
    setIsPrimary(!isPrimary);
    setValue(`gifts[${index - 1}].isPrimary`, !isPrimary);
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          {thumbnail && (
            <div>
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

              {/*대표 이미지 지정*/}
              <IconButton
                onClick={handleSetPrimary}
                sx={{
                  position: "absolute",
                  top: 30,
                  right: 10,
                  zIndex: 10,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                }}
              >
                {isPrimary ? (
                  <StarIcon sx={{ color: "gold" }} />
                ) : (
                  <StarBorderIcon sx={{ color: "gray" }} />
                )}
              </IconButton>
            </div>
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
