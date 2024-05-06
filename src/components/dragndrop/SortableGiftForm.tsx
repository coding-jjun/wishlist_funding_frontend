import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import GiftItem from "@/components/dragndrop/GiftItem";
import GiftDto from "@/types/GiftDto";

interface Props {
  id: number;
  giftInfo: GiftDto;
  onValueChange: (index: number, key: keyof GiftDto, value: any) => void;
}

export default function SortableGiftForm({
  id,
  giftInfo,
  onValueChange,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <span>Item {id}</span>
      <GiftItem index={id} giftInfo={giftInfo} onValueChange={onValueChange} />
    </div>
  );
}
