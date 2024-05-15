import React from "react";
import { useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { FormHelperText, Grid } from "@mui/material";

export default function DeadlineCalendar() {
  const today = dayjs();
  const { register, setValue } = useFormContext();

  const handleEndDateChange = (date: Dayjs | null) => {
    if (date) {
      const endDateToServer: Dayjs = date;
      setValue("endAt", endDateToServer);
    }
  };

  return (
    <Grid item xs={12}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem>
            <FormHelperText>마감기한</FormHelperText>
            <DatePicker
              {...register("endAt")}
              disablePast
              views={["year", "month", "day"]}
              onChange={handleEndDateChange}
              defaultValue={today}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Grid>
  );
}
