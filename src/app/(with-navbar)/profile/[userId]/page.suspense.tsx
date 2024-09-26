"use client";
import { SyntheticEvent, useState } from "react";
import StickyTabs from "@/components/tab/StickyTabs";
import { FundingStatusValue } from "@/types/Funding.enum";
import useFundingsQuery from "@/query/useFundingsQuery";
import UserProfile from "./view/UserProfile";
import { FundingList } from "./view/FundingList";
import useCurrentUserQuery from "@/query/useCurrentUserQuery";
import { useCookie } from "@/hook/useCookie";

interface Params {
  params: {
    userId: string;
  };
}

export default function MyPageContent({ params }: Params) {
  const myId = useCookie<number>("userId");
  const friendId = Number(params.userId);

  const [tab, setTab] = useState<FundingStatusValue>("진행 중");

  const { data: user } = useCurrentUserQuery();

  const { data: ongoingFundingsQueryResponse } = useFundingsQuery(
    {
      status: "ongoing",
    },
    friendId,
  );

  const { data: endedFundingsQueryResponse } = useFundingsQuery(
    {
      status: "ended",
    },
    friendId,
  );

  const handleTabChange = (
    event: SyntheticEvent,
    newTab: FundingStatusValue,
  ) => {
    setTab(newTab);
  };

  if (!user) {
    // TODO: fallback UI 작업 필요
    return null;
  }

  return (
    <>
      <UserProfile user={user} userId={myId} friendId={friendId} />
      <StickyTabs
        tabs={[
          {
            label: `진행 중  ${
              ongoingFundingsQueryResponse?.pages?.flatMap(
                (page) => page.fundings,
              ).length ?? 0
            }     `,
            value: "진행 중",
            panel: (
              <FundingList
                fundings={ongoingFundingsQueryResponse?.pages?.flatMap(
                  (page) => page.fundings,
                )}
              />
            ),
          },
          {
            label: `종료됨  ${
              endedFundingsQueryResponse?.pages?.flatMap(
                (page) => page.fundings,
              ).length ?? 0
            }     `,
            value: "종료됨",
            panel: (
              <FundingList
                fundings={endedFundingsQueryResponse?.pages?.flatMap(
                  (page) => page.fundings,
                )}
              />
            ),
          },
        ]}
        selectedTab={tab}
        handleTabChange={handleTabChange}
        tabPanelSx={{ padding: 0, marginTop: 2 }}
      />
    </>
  );
}
