// app/components/HighlightBubble.tsx
import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className='flex flex-col items-center gap-1'
    >
      <div className='w-16 h-16 rounded-full border border-gray-300 overflow-hidden'>
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className='w-full h-full object-cover'
        />
      </div>
      <p className="text-sm mt-1 text-pink-300 font-semibold drop-shadow-lg truncate max-w-[72px] text-center">
        {highlight.title}
      </p>
    </Link>
  );
}
