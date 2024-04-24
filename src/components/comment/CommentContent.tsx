import { ChangeEvent, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import useUpdateComment from "@/query/useUpdateComment";
import { editingComIdAtom } from "@/store/atoms/comment";
import { currentFundingAtom } from "@/store/atoms/funding";

interface Props {
  comId: number;
  content: string;
}

export default function CommentContent({ comId, content }: Props) {
  const [editingComId, setEditingComId] = useRecoilState(editingComIdAtom);
  const [editingContent, setEditingContent] = useState<string>(content);
  const currentFunding = useRecoilValue(currentFundingAtom);
  const { mutate: updateComment } = useUpdateComment(currentFunding?.fundId);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setEditingContent(e.target.value);
  };

  const handleClose = () => {
    setEditingComId(null);
    setEditingContent(content);
  };

  const handleUpdate = () => {
    if (editingComId === null || currentFunding?.fundId === undefined) return;

    updateComment({
      comId: editingComId,
      fundId: currentFunding?.fundId,
      content: editingContent,
    });

    handleClose();
  };

  return (
    <>
      {editingComId === comId ? (
        <Stack
          direction="column"
          sx={{
            border: `1px solid ${grey[300]}`,
            borderRadius: 1,
            mt: 1,
            width: "96%",
          }}
        >
          <TextField
            size="small"
            variant="standard"
            fullWidth
            multiline
            rows={4}
            value={editingContent}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true,
            }}
            sx={{ p: 2, boxSizing: "border-box" }}
          />
          <Stack direction="row" sx={{ width: "100%" }}>
            <Button
              color="info"
              disableElevation
              variant="outlined"
              onClick={handleClose}
              sx={{
                flexGrow: 1,
                borderRadius: 0,
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "none",
              }}
            >
              취소
            </Button>
            <Button
              variant="contained"
              color="info"
              disableElevation
              onClick={handleUpdate}
              sx={{ flexGrow: 1, borderRadius: 0 }}
            >
              수정
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Typography variant="body1">{content}</Typography>
      )}
    </>
  );
}
