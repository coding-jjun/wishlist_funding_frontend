import { Box, Button, ButtonGroup } from "@mui/material";

export default function NotificationButton() {
  return (
    <ButtonGroup>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Button
          sx={{
            borderColor: "#4F4635",
            borderRadius: 2,
            color: "#4F4635",
            margin: "3px",
            padding: "3px",
          }}
        >
          수락
        </Button>
        <Button
          sx={{
            borderColor: "#4F4635",
            borderRadius: 2,
            color: "#4F4635",
            margin: "3px",
            padding: "3px",
          }}
        >
          무시
        </Button>
      </Box>
    </ButtonGroup>
  );
}
