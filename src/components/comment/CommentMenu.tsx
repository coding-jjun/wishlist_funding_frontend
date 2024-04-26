import { useSetRecoilState } from "recoil";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { anchorCommentElAtom, selectedComIdAtom } from "@/store/atoms/comment";

interface Props {
  comId: number;
}

export default function CommentMenu({ comId }: Props) {
  const setSelectedComId = useSetRecoilState(selectedComIdAtom);
  const setAnchorEl = useSetRecoilState(anchorCommentElAtom);

  const handleClick = (event: React.MouseEvent) => {
    setSelectedComId(comId);
    setAnchorEl(event.currentTarget);
  };

  return (
    <IconButton
      sx={{ margin: 0, padding: 0, position: "absolute", top: 0, right: 0 }}
      onClick={handleClick}
    >
      <MoreVertIcon />
    </IconButton>
  );
}
