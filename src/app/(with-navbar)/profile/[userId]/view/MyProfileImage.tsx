import { ProfileImage } from "@/components/avatar";
import useUpdateUser from "@/query/useUpdateUser";
import { User } from "@/types/User";

interface Props {
  user: User;
}

export default function MyProfileImage({ user }: Props) {
  const { mutate: updateUser } = useUpdateUser(user.userId);

  const handleProfileImageChange = (img: string | number) => {
    // TODO: 업데이트할 때 업데이트하는 정보만 전달할 수 없을지..?
    if (typeof img === "number") {
      updateUser({
        userNick: user.userNick,
        userPw: user.userPw,
        userName: user.userName,
        userPhone: user.userPhone,
        userBirth: user.userBirth ? new Date(user.userBirth) : new Date(),
        userEmail: user.userEmail,
        defaultImgId: img,
      });
    } else {
      updateUser({
        userNick: user.userNick,
        userPw: user.userPw,
        userName: user.userName,
        userPhone: user.userPhone,
        userBirth: user.userBirth ? new Date(user.userBirth) : new Date(),
        userEmail: user.userEmail,
        userImg: img,
      });
    }
  };

  return (
    <ProfileImage
      imgSrc={
        user.image?.imgUrl ??
        "https://cdn.gukjenews.com/news/photo/202405/2989378_3066370_552.jpg"
      }
      onSubmit={handleProfileImageChange}
      userId={user.userId}
    />
  );
}
