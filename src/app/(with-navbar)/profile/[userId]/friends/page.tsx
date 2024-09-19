"use client";
import useFriendsQuery from "@/query/useFriendsQuery";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { FriendQueryDto } from "@/types/Friend";
import { useRouter, useSearchParams } from "next/navigation";
import Appbar from "@/components/layout/appbar/appbar";
import DeleteFriendButton from "@/app/(with-navbar)/profile/[userId]/friends/view/DeleteFriendButton";

interface Params {
  params: {
    userId: string;
  };
}

export default function FriendsListPage({ params }: Params) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = Number(params.userId);
  const userNick = searchParams.get("userNick");
  const { data: friendsList } = useFriendsQuery(userId);

  return (
    <>
      <Appbar title={userNick || ""} />
      <Box>
        <List>
          {friendsList?.result.map((friend: FriendQueryDto) => (
            <ListItem
              key={friend.userId}
              sx={{ marginBottom: 2 }}
              onClick={() => router.push(`/profile/${friend.userId}`)}
            >
              <ListItemAvatar>
                <Avatar
                  src={friend.userImg ?? "/dummy/profile.webp"}
                  sx={{ width: 30, height: 30 }}
                />
              </ListItemAvatar>
              <ListItemText primary={friend.userName} />
              <DeleteFriendButton
                userId={userId}
                friendId={friend.userId}
                frinedName={friend.userName}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
