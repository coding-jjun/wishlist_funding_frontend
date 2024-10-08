import { ProfileImage } from "@/components/avatar";
import useUpdateUser from "@/query/useUpdateUser";
import { User, UserDto } from "@/types/User";

interface Props {
  user: User | UserDto;
}

export default function MyProfileImage({ user }: Props) {
  const { mutate: updateUser } = useUpdateUser();

  const handleProfileImageChange = (img: string) => {
    updateUser({
      userImg: img,
    });
  };

  return (
    <ProfileImage
      imgSrc={user?.userImg}
      onSubmit={handleProfileImageChange}
      userId={user.userId}
    />
  );
}
