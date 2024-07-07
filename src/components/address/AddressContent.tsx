import { Stack, Typography } from "@mui/material";
import formatPhoneNumber from "@/utils/formatPhoneNumber";

interface Props {
  recvName: string;
  addrRoad: string;
  addrDetl: string;
  recvPhone: string;
}

export default function AddressContent({
  recvName,
  addrRoad,
  addrDetl,
  recvPhone,
}: Props) {
  const formattedPhone = formatPhoneNumber(recvPhone);
  return (
    <Stack direction="column">
      <Typography fontWeight={600} sx={{ padding: 0, margin: 0 }}>
        {recvName}
      </Typography>
      <Typography>
        {addrRoad} {addrDetl}
      </Typography>
      <Typography>{formattedPhone}</Typography>
    </Stack>
  );
}
