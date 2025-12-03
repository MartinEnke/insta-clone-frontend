// app/components/HighlightStory.tsx
import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] gap-4'>
      <div className='w-full max-w-sm aspect-[9/16] bg-black rounded-xl overflow-hidden'>
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className='w-full h-full object-cover'
        />
      </div>
      <h1 className='text-lg font-semibold'>{highlight.title}</h1>
    </div>
  );
}
