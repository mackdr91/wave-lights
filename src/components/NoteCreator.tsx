import { useState } from 'react';
import Card from "./Card";
import { legend } from "@/lib/tags";
import Tag from './Tag';

interface NoteCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onNoteCreated: () => void;
}

export default function NoteCreator({ isOpen, onClose, onNoteCreated }: NoteCreatorProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleTagClick = (color: string) => {
    if (selectedTags.includes(color)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== color));
    } else {
      setSelectedTags([...selectedTags, color]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newNote = {
      title,
      content,
      tags: selectedTags,
      date,
    };

    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });

    if (res.ok) {
      setTitle('');
      setContent('');
      setSelectedTags([]);
      setDate(new Date().toISOString().split('T')[0]);
      onNoteCreated();
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-20 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative z-30 m-4 w-full max-w-md transform transition-all duration-300 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Card showMenu={false}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              <span style={{ color: '#4285F4' }}>C</span>
              <span style={{ color: '#EA4335' }}>r</span>
              <span style={{ color: '#FBBC05' }}>e</span>
              <span style={{ color: '#34A853' }}>a</span>
              <span style={{ color: '#4285F4' }}>t</span>
              <span style={{ color: '#EA4335' }}>e</span>
              <span> </span>
              <span style={{ color: '#FBBC05' }}>a</span>
              <span> </span>
              <span style={{ color: '#34A853' }}>N</span>
              <span style={{ color: '#4285F4' }}>o</span>
              <span style={{ color: '#EA4335' }}>t</span>
              <span style={{ color: '#FBBC05' }}>e</span>
            </h2>
            <button onClick={onClose} className="text-white/80 hover:text-white text-3xl cursor-pointer">
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-white/80 mb-2">Title</label>
              <input type="text" id="title" className="w-full bg-white/20 rounded-md border-none text-white px-4 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-white/80 mb-2">Date</label>
              <input type="date" id="date" className="w-full bg-white/20 rounded-md border-none text-white px-4 py-2" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block text-white/80 mb-2">Body</label>
              <textarea id="body" rows={4} className="w-full bg-white/20 rounded-md border-none text-white px-4 py-2" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-white/80 mb-2">Tags</label>
              <div className="flex gap-2">
                {legend.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`rounded-full p-1 transition-all duration-200 ${
                      selectedTags.includes(item.color) ? 'ring-2 ring-white' : ''
                    }`}
                    onClick={() => handleTagClick(item.color)}
                  >
                    <Tag color={item.color} />
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              Create Note
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}