import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Button, ButtonGroup, Popover } from "@mui/material";
import useDeleteComment from "@/query/useDeleteComment";
import { currentFundingAtom } from "@/store/atoms/funding";
import {
  anchorCommentElAtom,
  editingComIdAtom,
  selectedComIdAtom,
} from "@/store/atoms/comment";

export default function CommentPopover() {
  const currentFunding = useRecoilValue(currentFundingAtom);
  const [selectedComId, setSelectedComId] = useRecoilState(selectedComIdAtom);
  const [anchorEl, setAnchorEl] = useRecoilState(anchorCommentElAtom);
  const setEditingComId = useSetRecoilState(editingComIdAtom);

  const { mutate: deleteComment } = useDeleteComment(currentFunding?.fundUuid);

  const handleClose = () => {
    setSelectedComId(null);
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    setEditingComId(selectedComId);
    handleClose();
  };

  const handleDelete = () => {
    if (selectedComId === null) return;
    deleteComment(selectedComId);
    handleClose();
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      slotProps={{
        paper: { elevation: 0 },
      }}
    >
      <ButtonGroup variant="outlined">
        <Button onClick={handleUpdate}>수정</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </ButtonGroup>
    </Popover>
  );
}
