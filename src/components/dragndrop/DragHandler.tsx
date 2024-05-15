import { IconButton } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: number;
}

export default function DragHandler({ id }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.2 : 1,
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
        <IconButton>
          <DragIndicatorIcon />
        </IconButton>
      </div>
      <IconButton
        // onClick={() => onDelete(index)}
        size="small"
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}
