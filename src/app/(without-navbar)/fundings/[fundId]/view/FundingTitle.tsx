import { Chip, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Funding } from "@/types/Funding";

interface Props {
  funding: Funding;
}

export default function FundingTitle({ funding }: Props) {
  const { fundTitle, fundTheme } = funding;

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant={"h5"} fontWeight={700} color={grey[800]}>
        {fundTitle}
      </Typography>
      <Chip label={fundTheme} size="small" sx={{ borderRadius: 2 }} />
    </Stack>
  );
}
