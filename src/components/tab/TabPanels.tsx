import { CSSProperties } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { TabInfo } from "@/components/tab/Tab.types";

interface Props {
  tabs: TabInfo[];
  sx?: CSSProperties;
}

export default function TabPanels({ tabs, sx }: Props) {
  return (
    <>
      {tabs.map((tab) => (
        <TabPanel
          key={`tab-panel-${tab.label}-${tab.value}`}
          value={tab.value}
          sx={{ ...sx }}
        >
          {tab.panel}
        </TabPanel>
      ))}
    </>
  );
}
