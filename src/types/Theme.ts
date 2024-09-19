export enum Theme {
  Birthday = "Birthday",
  Anniversary = "Anniversary",
  Donation = "Donation",
}

export const themeOptions = [
  {
    label: "생일",
    value: Theme.Birthday,
    icon: "/assets/icons/themes/birthday.webp",
  },
  {
    label: "기념일",
    value: Theme.Anniversary,
    icon: "/assets/icons/themes/anniversary.webp",
  },
  {
    label: "후원",
    value: Theme.Donation,
    icon: "/assets/icons/themes/donation.webp",
  },
];
