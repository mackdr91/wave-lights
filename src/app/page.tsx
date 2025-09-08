"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import NoteCreator from "@/components/NoteCreator";
import CreateNoteButton from "@/components/CreateNoteButton";
import Tag from "@/components/Tag";
import TagLegend from "@/components/TagLegend";
import LegendToggleButton from "@/components/LegendToggleButton";
import NoteEditor from "@/components/NoteEditor";
import Pagination from "@/components/Pagination";

interface Note {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
}

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isNoteCreatorOpen, setIsNoteCreatorOpen] = useState(false);
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  const fetchNotes = useCallback(async (page: number) => {
    const res = await fetch(`/api/notes?page=${page}&limit=6`);
    const data = await res.json();
    setNotes(data.notes);
    setTotalPages(data.totalPages);
  }, []);

  useEffect(() => {
    fetchNotes(currentPage);
  }, [currentPage, fetchNotes]);

  const handleEdit = (note: Note) => {
    setNoteToEdit(note);
    setIsNoteEditorOpen(true);
  };

  const handleDelete = (noteId: string) => {
    setNotes(notes.filter((note) => note._id !== noteId));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-24 pb-12 px-10 sm:p-12 md:p-16 lg:p-24 xl:p-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note) => (
            <Card
              key={note._id}
              noteId={note._id}
              onDelete={handleDelete}
              onEdit={() => handleEdit(note)}
            >
              <p className="text-sm text-white/60">{note.date}</p>
               <div className="flex gap-2 mt-2 mb-2">
                {note.tags.map((tagColor, index) => (
                  <Tag key={index} color={tagColor} />
                ))}
              </div>
              <h2 className="text-2xl font-bold text-white">{note.title}</h2>
              <p className="mt-4 text-white/80">{note.content}</p>

            </Card>
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </main>
      <CreateNoteButton onClick={() => setIsNoteCreatorOpen(true)} />
      <NoteCreator
        isOpen={isNoteCreatorOpen}
        onClose={() => setIsNoteCreatorOpen(false)}
        onNoteCreated={() => fetchNotes(1)}
      />
      <NoteEditor
        isOpen={isNoteEditorOpen}
        onClose={() => setIsNoteEditorOpen(false)}
        onNoteUpdated={() => fetchNotes(currentPage)}
        noteToEdit={noteToEdit}
      />
      <LegendToggleButton onClick={() => setIsLegendOpen(true)} />
      <TagLegend
        isOpen={isLegendOpen}
        onClose={() => setIsLegendOpen(false)}
      />
    </>
  );
}
