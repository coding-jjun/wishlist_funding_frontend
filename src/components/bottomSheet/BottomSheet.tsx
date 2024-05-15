import * as S from "@/components/bottomSheet/BottomSheetStyle";
import Header from "@/components/bottomSheet/Header";
import { AnimationControls } from "framer-motion";
import { Overlay } from "@/components/bottomSheet/BottomSheetStyle";

interface Props {
  isOpen: boolean;
  onDragEnd: (info: any) => void;
  controls: AnimationControls;
  closeBottomSheet: () => void;
  children: any;
}

export default function BottomSheet({
  isOpen,
  closeBottomSheet,
  onDragEnd,
  controls,
  children,
}: Props) {
  if (!isOpen) return null;
  return (
    <>
      <Overlay onClick={closeBottomSheet} />
      <S.Wrapper
        drag="y"
        onDragEnd={onDragEnd}
        initial="hidden"
        animate={controls}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: 0 },
          hidden: { y: "100%" },
        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
      >
        <Header />
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
