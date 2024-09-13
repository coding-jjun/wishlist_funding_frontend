import GiftDto from "@/types/GiftDto";

export function removeAtIndex(array: GiftDto[], index: number): GiftDto[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertAtIndex(
  array: GiftDto[],
  index: number,
  item: GiftDto,
): GiftDto[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function arrayMove(
  array: GiftDto[],
  oldIndex: number,
  newIndex: number,
): GiftDto[] {
  if (oldIndex === newIndex) return array;

  const targetItem = array[oldIndex]; // 이동 대상
  let result = removeAtIndex(array, oldIndex); // targetItem 지운 배열
  result = insertAtIndex(result, newIndex, targetItem); // targetItem을 드래그 한 자리로 넣은 배열
  return result;
}
