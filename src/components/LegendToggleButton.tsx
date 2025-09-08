interface LegendToggleButtonProps {
  onClick: () => void;
}

export default function LegendToggleButton({ onClick }: LegendToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="sm:hidden fixed bottom-28 right-8 bg-white/10 backdrop-blur-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl"
    >
      ?
    </button>
  );
}
