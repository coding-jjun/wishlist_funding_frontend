import React from "react";
import { Skeleton, Stack } from "@mui/material";

const MainPageSkeleton = () => {
  return (
    <Stack spacing={2} direction="column" sx={{ mt: "20px" }}>
      <Skeleton
        variant="text"
        sx={{ pt: "16px", pb: "5px", fontSize: "20px", bgcolor: "grey.100" }}
      />
      <Skeleton variant="rounded" height={140} sx={{ bgcolor: "grey.100" }} />
      <Skeleton variant="rounded" width={100} sx={{ bgcolor: "grey.100" }} />
      <Skeleton
        variant="text"
        sx={{ pt: "16px", pb: "5px", fontSize: "20px", bgcolor: "grey.100" }}
      />
      <Skeleton variant="rounded" height={320} sx={{ bgcolor: "grey.100" }} />
      <Skeleton variant="rounded" height={320} sx={{ bgcolor: "grey.100" }} />
    </Stack>
  );
};

export default MainPageSkeleton;
