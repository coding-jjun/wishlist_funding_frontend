import React from "react";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableGiftForm from "@/components/dragndrop/SortableGiftForm";

import GiftForm from "@/types/GiftForm";
import GiftDto from "@/types/GiftDto";

interface Prop {
  gifts: GiftForm[];
  onValueChange: (index: number, key: keyof GiftDto, value: any) => void;
}

export function DroppableGiftForm({ gifts, onValueChange }: Prop) {
  return (
    <SortableContext
      items={gifts.map((gift) => gift.id)}
      strategy={verticalListSortingStrategy}
    >
      {gifts.map((gift, index) => (
        <SortableGiftForm
          key={gift.id}
          id={gift.id}
          giftInfo={gift.giftInfo}
          onValueChange={onValueChange}
        />
      ))}
    </SortableContext>
  );
}
