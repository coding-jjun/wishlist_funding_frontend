import TabPanel from "@mui/lab/TabPanel";
import { TabInfo } from "@/components/tab/Tab.types";

interface Props {
  tabs: TabInfo[];
}

export default function TabPanels({ tabs }: Props) {
  return (
    <>
      {tabs.map((tab) => (
        <TabPanel key={`tab-panel-${tab.label}-${tab.value}`} value={tab.value}>
          {tab.panel}
        </TabPanel>
      ))}
    </>
  );
}
