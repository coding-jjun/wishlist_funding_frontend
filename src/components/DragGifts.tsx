import React, { useId, useMemo, useState } from "react";

import {
  DndContext,
  useSensor,
  useSensors,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  Active,
  Over,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { DroppableGiftForm } from "@/components/dragndrop/DroppableGiftForm";
import { arrayMove } from "@/utils/giftArray";
import AddGiftForm from "@/components/dragndrop/AddGiftForm";

import GiftDto from "@/types/GiftDto";
import GiftItem from "@/components/dragndrop/GiftItem";

interface Props {
  gifts: GiftDto[];
  setGifts: (updateFunction: (currentGifts: GiftDto[]) => GiftDto[]) => void;
}

interface DragEvent {
  active: Active;
  over: Over | null;
}

export default function DragGifts({ gifts, setGifts }: Props) {
  const DndId = useId();
  const [active, setActive] = useState<Active | null>(null);
  const activeItem = useMemo(
    () => gifts.find((gift) => gift.id === active?.id),
    [active, gifts],
  );

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleAddForm = () => {
    setGifts((currentGifts) => [
      ...currentGifts,
      {
        id: currentGifts.length + 1,
        giftOrd: currentGifts.length + 1,
        giftUrl: "",
        giftOpt: "",
        giftCont: "",
      },
    ]);
  };

  const handleDragStart = (event: DragEvent) => {
    setActive(event.active);
  };

  const handleDragCancel = () => {
    setActive(null);
  };

  const handleDragEnd = (event: DragEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      setActive(null);
      return;
    }

    if (active.id !== over?.id) {
      const activeIndex = gifts.findIndex(({ id }) => id === active.id);
      const overIndex = gifts.findIndex(({ id }) => id === over.id);

      if (activeIndex !== -1 && overIndex !== -1) {
        setGifts((prevGifts) => {
          const newGifts = arrayMove(prevGifts, activeIndex, overIndex);
          return newGifts.map((gift, index) => ({
            ...gift,
            giftOrd: index + 1,
          }));
        });
      }
    }
    setActive(null);
  };

  const deleteGift = (index: number) => {
    setGifts((prevGifts) =>
      prevGifts
        .filter((_, i) => i !== index)
        .map((gift, idx) => ({
          ...gift,
          giftOrd: idx + 1,
        })),
    );
  };

  return (
    <>
      <DndContext
        id={DndId}
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
      >
        <DroppableGiftForm
          key={gifts.length}
          gifts={gifts}
          onDelete={(index) => deleteGift(index)}
        />
        <DragOverlay>
          {activeItem ? (
            <GiftItem
              index={activeItem.id}
              gifts={gifts}
              onDelete={() =>
                deleteGift(gifts.findIndex((gift) => gift.id === active?.id))
              }
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      <AddGiftForm onSubmit={handleAddForm} />
    </>
  );
}
