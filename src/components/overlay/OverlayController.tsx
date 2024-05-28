import { CreateOverlayElement } from "@/types/CreateOverlayElement";
import {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

interface Props {
  overlayElement: CreateOverlayElement;
  onExit: () => void;
}

export interface OverlayControlRef {
  close: () => void;
}

export const OverlayController = forwardRef(function OverlayController(
  { overlayElement: OverlayElement, onExit }: Props,
  ref: Ref<OverlayControlRef>,
) {
  const [isOpenOverlay, setIsOpenOverlay] = useState<boolean>(false);

  const handleOverlayClose = useCallback(() => setIsOpenOverlay(false), []);

  useImperativeHandle(
    ref,
    () => {
      return { close: handleOverlayClose };
    },
    [handleOverlayClose],
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpenOverlay(true);
    });
  }, []);

  return (
    <OverlayElement
      isOpen={isOpenOverlay}
      close={handleOverlayClose}
      exit={onExit}
    />
  );
});
