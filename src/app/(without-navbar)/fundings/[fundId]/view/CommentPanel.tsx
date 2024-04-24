import useCommentsQuery from "@/query/useCommentsQuery";
import CommentWrapper from "@/components/comment/CommentWrapper";
import CommentInput from "@/components/comment/CommentInput";

interface Props {
  fundId: number;
}

export default function CommentPanel({ fundId }: Props) {
  const { data: comments } = useCommentsQuery(fundId);

  return (
    <>
      <CommentInput fundId={fundId} />
      {comments?.map((comment) => (
        <CommentWrapper
          key={`comment-box-${comment.comId}`}
          comment={comment}
        />
      ))}
    </>
  );
}
