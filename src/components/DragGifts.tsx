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

  const formData: GiftDto = {
    id: 1,
    giftUrl: "",
    giftOpt: "",
    giftCont: "",
  };

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

  const deleteGift = (index: number) => {
    console.log("삭제다");
    setGifts((currentGifts) => currentGifts.filter((gift, i) => i !== index));
  };

  const handleAddForm = () => {
    setGifts((currentGifts) => [
      ...currentGifts,
      {
        id: currentGifts.length + 1,
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
        setGifts((prevGifts) => arrayMove(prevGifts, activeIndex, overIndex));
      }
    }
    setActive(null);
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
          onDelete={() =>
            deleteGift(gifts.findIndex((gift) => gift.id === active?.id))
          }
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
