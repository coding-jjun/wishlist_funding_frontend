import { useAnimation, AnimationControls, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";

import usePreviousValue from "@/hook/usePreviousValue";

interface DragInfo {
  point: { x: number; y: number };
  y: number;
}

export default function useBottomSheet() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();
  const prevIsOpen: boolean | undefined = usePreviousValue(isOpen);

  const onDragEnd = (info: DragInfo) => {
    const shouldClose = info?.y > 20 || (info?.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
    } else {
      controls.start("visible");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
}
