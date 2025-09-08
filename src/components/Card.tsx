import React from 'react';
import CardMenu from './CardMenu';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noteId?: string;
  onDelete?: (noteId: string) => void;
  onEdit?: () => void;
  showMenu?: boolean;
}

export default function Card({ children, className, noteId, onDelete, onEdit, showMenu = true }: CardProps) {
  return (
    <div
      className={`relative bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg p-6 ${className}`}
    >
      {showMenu && noteId && onDelete && onEdit && <CardMenu noteId={noteId} onDelete={onDelete} onEdit={onEdit} />}
      {children}
    </div>
  );
}