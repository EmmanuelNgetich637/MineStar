import React from "react";

export default function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className='delete-button'> 🗑️ </button>
  );
} 