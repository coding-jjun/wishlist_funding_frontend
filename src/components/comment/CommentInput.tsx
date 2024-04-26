import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import OutlinedInput from "@mui/material/OutlinedInput";
import useAddComment from "@/query/useAddComment";

interface Props {
  fundId: number;
}

export default function CommentInput({ fundId }: Props) {
  const [content, setContent] = useState<string>("");
  const { mutate } = useAddComment(fundId);

  return (
    <OutlinedInput
      placeholder="댓글 등록"
      endAdornment={
        <InputAdornment position="end" variant="filled">
          {/*TODO: 사용자 기능 추가되면 authorId 수정 필요*/}
          <IconButton onClick={() => mutate({ fundId, authorId: 1, content })}>
            <ArrowCircleUpIcon />
          </IconButton>
        </InputAdornment>
      }
      onChange={(e) => setContent(e.target.value)}
      sx={{ width: "100%", mb: 4 }}
    />
  );
}
