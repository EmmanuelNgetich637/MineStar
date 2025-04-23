import React from "react";

export default function DeleteButton({ onDelete }) {
  return (
    <button 
      onClick={onDelete}
      className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors"
    >
      🗑️ Delete
    </button>
  );
} 