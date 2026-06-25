import { Star } from "lucide-react";

export function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} fill-current`} />
      ))}
    </div>
  );
}
