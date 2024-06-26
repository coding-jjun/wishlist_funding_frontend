import { useFormContext } from "react-hook-form";
import { Grid, TextField } from "@mui/material";

export default function TextInput() {
  const { register } = useFormContext();

  return (
    <>
      <Grid item xs={12}>
        <TextField
          label="제목"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          {...register("fundTitle")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="내용"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          multiline
          rows={4}
          {...register("fundCont")}
        />
      </Grid>
    </>
  );
}
