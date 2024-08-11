import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useCookie = <T = string>(key: string): T | null => {
  const [cookieValue, setCookieValue] = useState<T | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = Cookies.get(key);
      if (value) {
        try {
          const parsedValue = JSON.parse(value) as T;
          setCookieValue(parsedValue);
        } catch (e) {
          setCookieValue(value as T);
        }
      }
    }
  }, [key]);

  return cookieValue;
};
