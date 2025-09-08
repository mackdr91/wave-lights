interface TagProps {
  color: string;
}

export default function Tag({ color }: TagProps) {
  return (
    <div
      className="w-4 h-4 rounded-full"
      style={{ backgroundColor: color }}
    ></div>
  );
}
