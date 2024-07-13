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

  const item = array[oldIndex];
  let result = removeAtIndex(array, oldIndex);
  result = insertAtIndex(result, newIndex, item);
  return result;
}
