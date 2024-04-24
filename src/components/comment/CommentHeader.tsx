import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";

interface Props {
  author: string;
  regAt: string;
}

export default function CommentHeader({ author, regAt }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Typography fontWeight={700} sx={{ padding: 0, margin: 0 }}>
        {author}
      </Typography>
      <Typography
        variant={"body2"}
        color={grey[500]}
        sx={{ padding: 0, margin: 0 }}
      >
        {getTimeAgoText(regAt)}
      </Typography>
    </Stack>
  );
}
