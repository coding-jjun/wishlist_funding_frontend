import { useEffect, useRef, useCallback } from "react";

const useIntersectionObserver = (
  callback: () => void,
  options?: IntersectionObserverInit,
) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const intersectionCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(intersectionCallback, options);

    const { current: currentObserver } = observer;
    if (lastElementRef.current) {
      currentObserver.observe(lastElementRef.current);
    }

    return () => currentObserver.disconnect();
  }, [intersectionCallback, options]);

  return lastElementRef;
};

export default useIntersectionObserver;
