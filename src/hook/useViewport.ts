import { cookies, headers } from "next/headers";

export const useViewport = () => {
  const cookieViewport = cookies().get("viewport")?.value;
  const headerViewport = headers().get("viewport");

  return {
    isMobile: cookieViewport === "mobile" || headerViewport === "mobile",
    isDesktop: cookieViewport === "desktop" || headerViewport === "desktop",
  };
};
