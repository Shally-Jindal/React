import React, { useState } from 'react';

export default function DragDrop() {
  const [items, setItems] = useState(['Item1', 'Item2', 'Item3', 'Item4']);
  let [draggedIdx, setDraggedIdx] = useState(null);

  function handleDragStart(index) {
    setDraggedIdx(index);
  }
  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleOnDrop(index) {
    if (draggedIdx == null) return;

    const updatedItems = [...items];
    const removedItem = updatedItems.splice(draggedIdx, 1);
    updatedItems.splice(index, 0, removedItem);

    setItems(updatedItems);
  }

  return (
    <div>
      {items.map((item, index) => (
        <div
        key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleOnDrop(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
