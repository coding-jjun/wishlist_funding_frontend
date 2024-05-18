import { Stack } from "@mui/material";
import Logo from "@/components/logo/Logo";
import { NotificationIcon } from "@/components/icon";

export default function MainHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo />
      <NotificationIcon hasNotification={true} />
    </Stack>
  );
}
