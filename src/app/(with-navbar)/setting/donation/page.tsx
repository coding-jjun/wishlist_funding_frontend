"use client";
import { Theme } from "@/types/Theme";
import { IconButton, Stack, Typography } from "@mui/material";
import HorizontalDonationCard from "@/components/card/HorizontalDonationCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { TopFixedStack } from "@/components/layout/action-bar/TopFixedStack";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import StickyTabs from "@/components/tab/StickyTabs";
import { FundingStatusValue } from "@/types/Funding.enum";
import useMyDonationsQuery from "@/query/useMyDonationsQuery";

export default function DonationPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"진행 중" | "종료됨">("진행 중");
  const { data: myOngoingDonations } = useMyDonationsQuery(1, "ongoing");
  const { data: myEndedDonations } = useMyDonationsQuery(1, "ended");
  const handleTabChange = (
    event: SyntheticEvent,
    newTab: FundingStatusValue,
  ) => {
    setTab(newTab);
  };

  return (
    <>
      <TopFixedStack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography
          fontSize="20px"
          fontWeight={700}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          나의 후원내역
        </Typography>
      </TopFixedStack>
      <StickyTabs
        selectedTab={tab}
        handleTabChange={handleTabChange}
        tabPanelSx={{ padding: 0, marginTop: 2 }}
        tabs={[
          {
            label: "진행 중",
            value: "진행 중",
            panel: (
              <Stack sx={{ marginTop: "20px" }}>
                {myOngoingDonations?.pages
                  ?.flatMap((page) => page.donations)
                  .map((dontaion) => (
                    <HorizontalDonationCard
                      key={dontaion.donId}
                      image={"/dummy/present.png"}
                      userId={dontaion.fundUserNick}
                      title={dontaion.fundTitle}
                      theme={Theme.Donation}
                      money={dontaion.donAmnt}
                      buttonText={"환불 받기"}
                      handleClick={() => {}}
                    />
                  ))}
              </Stack>
            ),
          },
          {
            label: "종료됨",
            value: "종료됨",
            panel: (
              <Stack sx={{ marginTop: "20px" }}>
                {myEndedDonations?.pages
                  ?.flatMap((page) => page.donations)
                  .map((dontaion) => (
                    <HorizontalDonationCard
                      key={dontaion.donId}
                      image={"/dummy/present.png"}
                      userId={dontaion.fundUserNick}
                      title={dontaion.fundTitle}
                      theme={Theme.Donation}
                      money={dontaion.donAmnt}
                      buttonText={"감사인사 보러 가기"}
                      handleClick={() =>
                        router.push(`/fundings/${dontaion.fundUuid}`)
                      }
                    />
                  ))}
              </Stack>
            ),
          },
        ]}
      />
    </>
  );
}
