"use client";
import { SyntheticEvent, useState } from "react";
import StickyTabs from "@/components/tab/StickyTabs";
import { FundingStatusValue } from "@/types/Funding.enum";
import useFundingsQuery from "@/query/useFundingsQuery";
import useUserQuery from "@/query/useUserQuery";
import UserProfile from "./view/UserProfile";
import { FundingList } from "./view/FundingList";

interface Params {
  params: {
    userId: string;
  };
}

export default function MyPagePage({ params }: Params) {
  const userId = Number(params.userId);
  // TODO: 현재 로그인되어 있는 유저의 아이디로 수정 필요
  const friendId = 2;

  const [tab, setTab] = useState<FundingStatusValue>("진행 중");

  const { data: user } = useUserQuery(userId);

  const { data: ongoingFundingsQueryResponse } = useFundingsQuery(1, {
    fundPublFilter: "mine",
    status: "ongoing",
  });

  const { data: endedFundingsQueryResponse } = useFundingsQuery(1, {
    fundPublFilter: "mine",
    status: "ended",
  });

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
      <UserProfile user={user} userId={userId} friendId={friendId} />
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
