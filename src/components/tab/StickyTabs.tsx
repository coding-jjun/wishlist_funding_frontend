import type { CSSProperties, SyntheticEvent } from "react";
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import type { TabInfo } from "@/components/tab/Tab.types";
import TabItems from "@/components/tab/TabItems";
import TabPanels from "@/components/tab/TabPanels";

interface Props {
  tabs: TabInfo[];
  selectedTab: string | number;
  handleTabChange: (event: SyntheticEvent, value: any) => void;
  tabPanelSx?: CSSProperties;
}

export default function StickyTabs({
  tabs,
  selectedTab,
  handleTabChange,
  tabPanelSx,
}: Props) {
  return (
    <TabContext value={selectedTab}>
      <Box
        sx={{
          top: 0,
          position: "sticky",
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#FFFFFF",
          zIndex: 999,
        }}
      >
        <TabItems tabs={tabs} handleTabChange={handleTabChange} />
      </Box>
      <TabPanels tabs={tabs} sx={tabPanelSx} />
    </TabContext>
  );
}
