import { Button, ButtonGroup, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

export default function PublicButtons() {
  const { setValue, watch } = useFormContext();
  const name = "fundPubl";

  const handlePublicityChange = (isPublic: boolean) => {
    setValue(name, isPublic);
  };

  const pub = watch(name, true);

  useEffect(() => {
    setValue(name, true);
  }, [setValue, name]);

  return (
    <Grid item xs={12}>
      <ButtonGroup fullWidth>
        {["전체 공개", "친구만"].map((label, index) => (
          <Button
            sx={{
              backgroundColor: pub === (index === 0) ? "#FFE022" : "#fff",
              color: "#4F4635",
              borderRadius: "20px",
              borderColor: "#FFE022",
              boxShadow:
                pub === (index === 0)
                  ? "0px 4px 8px rgba(0, 0, 0, 0.15)"
                  : "0px 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#FFE022",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
            key={index}
            onClick={() => handlePublicityChange(index === 0)}
            variant={pub === (index === 0) ? "contained" : "outlined"}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </Grid>
  );
}
