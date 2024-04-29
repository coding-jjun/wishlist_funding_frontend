import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import GiftForm from "@/types/GiftForm";
import GiftItem from "@/components/dragndrop/GiftItem";

export default function SortableGiftForm({ id, giftInfo }: GiftForm) {
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
      <GiftItem index={id} giftInfo={giftInfo} />
    </div>
  );
}
