import { Avatar, Chip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import addComma from "@/utils/addComma";

interface Props {
  amount: number;
  size?: "small" | "medium";
}

export default function MoneyChip({ amount, size = "small" }: Props) {
  return (
    <Chip
      icon={
        <Avatar sx={{ width: 20, height: 20 }}>
          <Typography variant="body2" sx={{ color: grey[700] }}>
            ₩
          </Typography>
        </Avatar>
      }
      label={addComma(amount)}
      size={size}
    />
  );
}
