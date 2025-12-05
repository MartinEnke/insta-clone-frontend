import type { Post } from "~/schemas/post.schema";
import { api } from "~/services/api";

const API_BASE_URL = (api.defaults.baseURL ?? "").replace(/\/$/, "");

export function PostCard({ post }: { post: Post }) {
  const imageSrc = post.img_url.startsWith("http")
    ? post.img_url // already an absolute URL
    : `${API_BASE_URL}${post.img_url}`; // e.g. http://localhost:3000/uploads/...

  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6">
      <div className="p-4">
        <p className="font-bold">webeet_user</p>
      </div>
      <img
        src={imageSrc}
        alt={post.caption || "Instagram post"}
        className="w-full h-auto aspect-square object-cover"
      />
      <div className="p-4">
        <p>
          <span className="font-bold mr-2">webeet_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}
