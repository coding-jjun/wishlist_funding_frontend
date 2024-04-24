import { Avatar, Stack } from "@mui/material";
import { Comment } from "@/types/Comment";
import CommentPopover from "@/components/comment/CommentPopover";
import CommentMenu from "@/components/comment/CommentMenu";
import CommentContent from "@/components/comment/CommentContent";
import CommentHeader from "@/components/comment/CommentHeader";

interface Props {
  comment: Comment;
}

export default function CommentWrapper({ comment }: Props) {
  const { comId, authorImg, authorName, content, regAt, isMod } = comment;

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{ pb: 3, width: "100%", position: "relative" }}
    >
      <Avatar
        alt={`${authorName}-profile`}
        src={authorImg ?? "/dummy/profile.png"}
        sx={{ width: 30, height: 30 }}
      />
      <div style={{ width: "100%" }}>
        <CommentHeader author={authorName} regAt={regAt} />
        <CommentContent comId={comId} content={content} />
      </div>
      <CommentMenu comId={comId} />
      <CommentPopover />
    </Stack>
  );
}
