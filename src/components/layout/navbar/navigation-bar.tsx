"use client";
import { SyntheticEvent, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  const [value, setValue] = useState("home");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="home"
          icon={<HomeIcon />}
          onClick={() => router.push("/")}
        />
        <BottomNavigationAction
          value="feeds"
          icon={<GroupIcon />}
          onClick={() => router.push("/feeds")}
        />
        <BottomNavigationAction
          value="new"
          icon={<AddCircleIcon />}
          onClick={() => router.push("/fundings/creation")}
        />
        <BottomNavigationAction
          value="profile"
          icon={<AccountCircleIcon />}
          // TODO: example-id를 로그인된 아이디로 수정 필요
          onClick={() => router.push("/profile/example-id")}
        />
        <BottomNavigationAction
          value="setting"
          icon={<SettingsIcon />}
          onClick={() => router.push("/setting")}
        />
      </BottomNavigation>
    </Paper>
  );
}
