import { useFormContext } from "react-hook-form";
import { Box, TextField } from "@mui/material";

export default function TextInput() {
  const { register } = useFormContext();

  return (
    <Box>
      <TextField
        defaultValue=""
        label="제목"
        fullWidth
        {...register("fundTitle")}
      />
      <TextField
        label="내용"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        defaultValue=""
        {...register("fundCont")}
      />
    </Box>
  );
}
