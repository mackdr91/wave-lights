interface CreateNoteButtonProps {
  onClick: () => void;
}

export default function CreateNoteButton({ onClick }: CreateNoteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full 
      w-16 h-16 flex items-center justify-center text-3xl cursor-pointer shadow-lg transition-all duration-200"
    >
      ✒️
    </button>
  );
}
