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
      {gifts.map((gift) => (
        <SortableGiftForm
          key={gift.id}
          id={gift.id}
          giftOrd={gift.giftOrd}
          gifts={gifts}
          onDelete={() => onDelete(gift.id)}
        />
      ))}
    </SortableContext>
  );
}
