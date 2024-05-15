import React from "react";

import GiftItem from "@/components/dragndrop/GiftItem";
import GiftDto from "@/types/GiftDto";

interface Props {
  id: number;
  gifts: GiftDto[];
  onDelete: (index: number) => void;
}

export default function SortableGiftForm({ id, gifts, onDelete }: Props) {
  return <GiftItem index={id} gifts={gifts} onDelete={onDelete} />;
}
