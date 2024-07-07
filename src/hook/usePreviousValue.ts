import { useEffect, useRef } from "react";

export default function usePreviousValue<T>(value: T): T | undefined {
  const previousValueRef = useRef<T | undefined>();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}
