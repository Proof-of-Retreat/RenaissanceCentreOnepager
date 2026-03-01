interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "wide";
}

export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "video",
}: ImagePlaceholderProps) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[3/1]",
  }[aspect];

  return (
    <div
      className={`${aspectClass} border-2 border-dashed border-dark/20 rounded-lg flex items-center justify-center bg-dark/5 ${className}`}
    >
      <span className="text-dark/40 text-sm text-center px-4">{label}</span>
    </div>
  );
}
