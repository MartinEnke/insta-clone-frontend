// app/routes/profile.tagged.grid.tsx
import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import {
  taggedPostsSchema,
  type TaggedPost,
} from "~/schemas/tagged.schema";
import { PostCard } from "~/components/PostCard";

export async function loader() {
  try {
    const response = await api.get("/tagged/grid");
    return taggedPostsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

export default function TaggedGrid() {
  const taggedPosts = useLoaderData() as TaggedPost[];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {taggedPosts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
          <p className='mt-1 text-xs text-gray-500'>
            Tagged by <span className='font-medium'>{post.tagged_by}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
