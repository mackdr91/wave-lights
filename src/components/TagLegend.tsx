import Tag from "./Tag";
import { legend } from "@/lib/tags";

interface TagLegendProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TagLegend({ isOpen, onClose }: TagLegendProps) {
  return (
    <>
      {/* Desktop legend */}
      <div className="hidden sm:block fixed bottom-28 right-8 text-white/60 text-sm">
        <div className="flex flex-col gap-2">
          {legend.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <Tag color={item.color} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile popup legend */}
      <div
        className={`sm:hidden fixed inset-0 bg-black/50 z-20 flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className={`relative z-30 m-4 w-full max-w-xs transform transition-all duration-300 ease-out ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="flex flex-col gap-2 text-white/80">
              {legend.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <Tag color={item.color} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}