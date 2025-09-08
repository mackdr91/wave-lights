"use client";

import { useState, useEffect, useRef } from "react";

interface CardMenuProps {
  noteId: string;
  onDelete: (noteId: string) => void;
  onEdit: () => void;
}

export default function CardMenu({ noteId, onDelete, onEdit }: CardMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleDelete = async () => {
    const res = await fetch(`/api/notes/${noteId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      onDelete(noteId);
    }
  };

  return (
    <div className="absolute top-4 right-4 cursor-pointer" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white/80 hover:text-white cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-lg border border-white/20 rounded-md shadow-lg z-10 origin-top-right transition-all duration-300 ease-out transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <a href="#" onClick={onEdit} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/20">Edit</a>
        <a href="#" onClick={handleDelete} className="block px-4 py-2 text-sm text-red-500 hover:bg-white/20">Delete</a>
      </div>
    </div>
  );
}
