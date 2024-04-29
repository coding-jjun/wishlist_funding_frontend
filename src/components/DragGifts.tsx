import { useState } from "react";

import {
  DndContext,
  closestCorners,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { DroppableGiftForm } from "@/components/dragndrop/DroppableGiftForm";
import { arrayMove } from "@/utils/giftArray";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import AddGiftForm from "@/components/dragndrop/AddGiftForm";

import GiftForm from "@/types/GiftForm";
import GiftDto from "@/types/GiftDto";

export default function DragGifts() {
  const formData: GiftDto = { giftUrl: "", giftOpt: "", giftCont: "" };
  const [gifts, setGifts] = useState<GiftForm[]>([
    {
      id: 1,
      giftInfo: formData,
    },
  ]);

  const addForm = () => {
    setGifts((gifts) => [
      ...gifts,
      { id: gifts.length + 1, giftInfo: formData },
    ]);
  };

  const getTaskPosition = (id: number) =>
    gifts.findIndex((task) => task.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setGifts((gifts) => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);
      return arrayMove(gifts, originalPosition, newPosition);
    });
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <>
      <AddGiftForm onSubmit={addForm} />
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <DroppableGiftForm gifts={gifts} />
      </DndContext>
    </>
  );
}
