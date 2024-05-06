import React, { useId, useState } from "react";

import {
  DndContext,
  useSensor,
  useSensors,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { DroppableGiftForm } from "@/components/dragndrop/DroppableGiftForm";
import { arrayMove } from "@/utils/giftArray";
import AddGiftForm from "@/components/dragndrop/AddGiftForm";

import GiftForm from "@/types/GiftForm";
import GiftDto from "@/types/GiftDto";
import { FormProvider, useForm } from "react-hook-form";
import GiftItem from "@/components/dragndrop/GiftItem";

export default function DragGifts() {
  const DndId = useId();

  const formData: GiftDto = { giftUrl: "", giftOpt: "", giftCont: "" };

  const methods = useForm();
  const [gifts, setGifts] = useState<GiftForm[]>([
    {
      id: 1,
      giftInfo: formData,
    },
  ]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const onValueChange = (index: number, key: keyof GiftDto, value: any) => {
    const updatedGifts = gifts.map((gift, i) =>
      i === index ? { ...gift, [key]: value } : gift,
    );
    setGifts(updatedGifts);
  };

  const addForm = () => {
    setGifts((gifts) => [
      ...gifts,
      { id: gifts.length + 1, giftInfo: formData },
    ]);
  };

  const handleDragStart = (event: any) => setActiveId(event.active.id);

  const handleDragCancel = () => setActiveId(null);

  const handleDragOver = (event: any) => {
    const { active, over } = event;
    const overId = over?.id;

    if (!overId) return;

    const activeIndex = gifts.findIndex((gift) => gift.id === active.id);
    const overIndex = gifts.findIndex((gift) => gift.id === overId);

    // 인덱스가 유효하고 서로 다른 위치에 있을 경우만 이동 처리
    if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
      setGifts((prevGifts) => arrayMove(prevGifts, activeIndex, overIndex));
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    // 드래그가 같은 요소 내에서 종료되거나, 유효한 대상이 없는 경우 상태 업데이트 하지 않고 종료
    if (!over || active.id === over.id) {
      setActiveId(null);
      return;
    }

    const activeIndex = gifts.findIndex((gift) => gift.id === active.id);
    const overIndex = gifts.findIndex((gift) => gift.id === over.id);

    if (activeIndex !== -1 && overIndex !== -1) {
      setGifts((prevGifts) => arrayMove(prevGifts, activeIndex, overIndex));
    }
    setActiveId(null);
  };

  return (
    <>
      <AddGiftForm onSubmit={addForm} />
      <FormProvider {...methods}>
        <DndContext
          id={DndId}
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <DroppableGiftForm gifts={gifts} onValueChange={onValueChange} />
          <DragOverlay>
            {activeId ? (
              <GiftItem
                index={gifts.findIndex((gift) => gift.id === activeId)}
                giftInfo={
                  gifts.find((gift) => gift.id === activeId)?.giftInfo ||
                  formData
                }
                onValueChange={onValueChange}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </FormProvider>
    </>
  );
}
