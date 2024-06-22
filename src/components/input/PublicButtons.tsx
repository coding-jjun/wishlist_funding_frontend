import { Button, ButtonGroup } from "@mui/material";
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
    <ButtonGroup fullWidth>
      {["전체공개", "친구공개"].map((label, index) => (
        <Button
          key={index}
          onClick={() => handlePublicityChange(index === 0)}
          variant={pub === (index === 0) ? "contained" : "outlined"}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
