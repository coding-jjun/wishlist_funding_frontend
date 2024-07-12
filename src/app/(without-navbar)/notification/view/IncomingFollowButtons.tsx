import { Box, Button, ButtonGroup } from "@mui/material";

export default function IncomingFollowButtons() {
  return (
    <ButtonGroup
      sx={{
        width: "50%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Button
          sx={{
            borderColor: "#d0d0d0",
            borderRadius: 2,
            color: "#4F4635",
            padding: "3px",
            flex: 1,
          }}
        >
          수락
        </Button>
        <Button
          sx={{
            borderColor: "#d0d0d0",
            borderRadius: 2,
            color: "#4F4635",
            padding: "3px",
            ml: 0.5,
            flex: 1,
          }}
        >
          무시
        </Button>
      </Box>
    </ButtonGroup>
  );
}
