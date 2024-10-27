import React from "react";

import GiftItem from "@/components/dragndrop/GiftItem";
import GiftDto from "@/types/GiftDto";

interface Props {
  id: number;
  giftOrd: number;
  gifts: GiftDto[];
  onDelete: () => void;
  primaryIndex: number | null;
  setPrimaryIndex: (index: number) => void;
}

export default function SortableGiftForm({
  id,
  giftOrd,
  gifts,
  onDelete,
  primaryIndex,
  setPrimaryIndex,
}: Props) {
  return (
    <GiftItem
      id={id}
      index={id}
      gifts={gifts}
      onDelete={onDelete}
      primaryIndex={primaryIndex}
      setPrimaryIndex={setPrimaryIndex}
    />
  );
}
