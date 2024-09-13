import useCommentsQuery from "@/query/useCommentsQuery";
import CommentWrapper from "@/components/comment/CommentWrapper";
import CommentInput from "@/components/comment/CommentInput";

interface Props {
  fundUuid: string;
}

export default function CommentPanel({ fundUuid }: Props) {
  const { data: comments } = useCommentsQuery(fundUuid);

  return (
    <>
      <CommentInput fundUuid={fundUuid} />
      {comments?.map((comment) => (
        <CommentWrapper
          key={`comment-box-${comment.comId}`}
          comment={comment}
        />
      ))}
    </>
  );
}
