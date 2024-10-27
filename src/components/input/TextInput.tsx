import { useFormContext } from "react-hook-form";
import { Grid, TextField } from "@mui/material";

export default function TextInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid item xs={12}>
        <TextField
          label="제목"
          InputLabelProps={{ shrink: true }}
          fullWidth
          {...register("fundTitle", { required: "제목을 입력해주세요." })}
          error={!!errors.fundTitle}
          helperText={errors.fundTitle?.message?.toString() || ""}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="내용"
          InputLabelProps={{ shrink: true }}
          fullWidth
          multiline
          rows={4}
          {...register("fundCont", { required: "내용을 입력해주세요." })}
          error={!!errors.fundCont}
          helperText={errors.fundCont?.message?.toString() || ""}
        />
      </Grid>
    </>
  );
}
