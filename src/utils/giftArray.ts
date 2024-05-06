import GiftForm from "@/types/GiftForm";

export function removeAtIndex(array: GiftForm[], index: number): GiftForm[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertAtIndex(
  array: GiftForm[],
  index: number,
  item: GiftForm,
): GiftForm[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function arrayMove(
  array: GiftForm[],
  oldIndex: number,
  newIndex: number,
): GiftForm[] {
  const result = Array.from(array);
  const [removed] = result.splice(oldIndex, 1);
  result.splice(newIndex, 0, removed);
  return result;
}
