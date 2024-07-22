import React from "react";
import { Skeleton, Stack } from "@mui/material";

const FundingListPageSkeleton = () => {
  return (
    <Stack spacing={2} direction="column" sx={{ mt: "20px" }}>
      <Skeleton
        variant="text"
        width={350}
        sx={{
          pt: "16px",
          pb: "5px",
          fontSize: "20px",
          bgcolor: "grey.100",
          borderRadius: 4,
        }}
      />
      <Skeleton
        variant="rounded"
        height={320}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />
      <Skeleton
        variant="rounded"
        height={320}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />
      <Skeleton
        variant="rounded"
        height={320}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />
    </Stack>
  );
};

export default FundingListPageSkeleton;
