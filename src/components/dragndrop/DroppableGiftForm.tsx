import React from "react";

import { SortableContext } from "@dnd-kit/sortable";
import SortableGiftForm from "@/components/dragndrop/SortableGiftForm";

import GiftDto from "@/types/GiftDto";

interface Prop {
  gifts: GiftDto[];
  onDelete: (index: number) => void;
}

export function DroppableGiftForm({ gifts, onDelete }: Prop) {
  return (
    <SortableContext items={gifts}>
      {gifts.map((gift, index) => (
        <SortableGiftForm
          key={gift.id}
          id={gift.id}
          giftOrd={index + 1}
          gifts={gifts}
          onDelete={() => onDelete(gift.id)}
        />
      ))}
    </SortableContext>
  );
}
