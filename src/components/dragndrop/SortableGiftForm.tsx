import React from "react";

import GiftItem from "@/components/dragndrop/GiftItem";
import GiftDto from "@/types/GiftDto";

interface Props {
  id: number;
  giftOrd: number;
  gifts: GiftDto[];
  onDelete: () => void;
}

export default function SortableGiftForm({
  id,
  giftOrd,
  gifts,
  onDelete,
}: Props) {
  return <GiftItem id={id} index={id} gifts={gifts} onDelete={onDelete} />;
}
