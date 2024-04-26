import type { SyntheticEvent } from "react";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import type { TabInfo } from "@/components/tab/Tab.types";

interface Props {
  tabs: TabInfo[];
  handleTabChange: (event: SyntheticEvent, value: any) => void;
}

export default function TabItems({ tabs, handleTabChange }: Props) {
  return (
    <TabList onChange={handleTabChange} variant="scrollable">
      {tabs.map((tab) => (
        <Tab
          key={`tab-${tab.label}-${tab.value}`}
          label={tab.label}
          value={tab.value}
          sx={{ flexGrow: 1 }}
        />
      ))}
    </TabList>
  );
}
