import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import getTimeAgoText from "@/utils/getTimeAgoText";

interface Props {
  addrNick: string;
  isDef: boolean;
}

export default function AddressHeader({ addrNick, isDef }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Typography
        variant={"h6"}
        fontWeight={700}
        sx={{ padding: 0, margin: 0 }}
      >
        {addrNick}
      </Typography>
      <Typography
        variant={"body2"}
        color={grey[500]}
        sx={{ padding: 0, margin: 0 }}
      >
        {isDef && "기본 배송지"}
      </Typography>
    </Stack>
  );
}
