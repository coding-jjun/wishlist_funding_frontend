import { atom } from "recoil";

// 현재 선택된 댓글의 아이디
export const selectedComIdAtom = atom<number | null>({
  key: "selectedComIdAtom",
  default: null,
});

// Anchor가 되는 댓글 Element
export const anchorCommentElAtom = atom<(EventTarget & Element) | null>({
  key: "anchorCommentElAtom",
  default: null,
});

// 편집 중인 댓글의 아이디
export const editingComIdAtom = atom<number | null>({
  key: "editingComIdAtom",
  default: null,
});
