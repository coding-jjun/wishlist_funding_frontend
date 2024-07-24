import React from "react";
import { Skeleton, Stack } from "@mui/material";

const ProfilePageSkeleton = () => {
  return (
    <Stack spacing={2} direction="column" sx={{ mt: "20px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ px: 1, py: 2 }}
      >
        <Stack direction="column" justifyContent="center">
          <Skeleton
            variant="text"
            width={100}
            height={30}
            sx={{ bgcolor: "grey.100" }}
          />
          <Skeleton variant="text" width={150} sx={{ bgcolor: "grey.100" }} />
          <Skeleton
            variant="text"
            width={100}
            height={30}
            sx={{ bgcolor: "grey.100" }}
          />
        </Stack>
        <Skeleton
          variant="rounded"
          width={100}
          height={100}
          sx={{ bgcolor: "grey.100", borderRadius: 100 }}
        />
      </Stack>
      <Skeleton
        variant="text"
        height={40}
        sx={{
          pt: "16px",
          pb: "5px",
          fontSize: "20px",
          bgcolor: "grey.100",
          borderRadius: 1,
        }}
      />
      <Skeleton
        variant="rounded"
        height={140}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />{" "}
      <Skeleton
        variant="rounded"
        height={140}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />{" "}
      <Skeleton
        variant="rounded"
        height={140}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />{" "}
      <Skeleton
        variant="rounded"
        height={140}
        sx={{ bgcolor: "grey.100", borderRadius: 4 }}
      />
    </Stack>
  );
};

export default ProfilePageSkeleton;
