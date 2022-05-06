import React from "react";
import { useDrag, DragSourceHookSpec } from "react-dnd";

export const Ticket = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div role="Handle" ref={drag} />
    </div>
  );
};
