import React from "react";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableGiftForm from "@/components/dragndrop/SortableGiftForm";

import GiftForm from "@/types/GiftForm";

interface Prop {
  gifts: GiftForm[];
}
export function DroppableGiftForm({ gifts }: Prop) {
  return (
    <SortableContext
      items={gifts.map((gift: GiftForm) => gift.id)}
      strategy={verticalListSortingStrategy}
    >
      {gifts.map((gift: GiftForm) => (
        <SortableGiftForm key={gift.id} id={gift.id} giftInfo={gift.giftInfo} />
      ))}
    </SortableContext>
  );
}
