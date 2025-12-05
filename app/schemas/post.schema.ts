import { z } from "zod";

// Schema for a single post returned from the backend
export const postSchema = z.object({
  id: z.number(),
  img_url: z.string(), // backend returns "/uploads/...", not a full URL
  caption: z.string().nullable(),
  created_at: z.string(),
});

// Schema for an array of posts
export const postsSchema = z.array(postSchema);

// TypeScript type inferred from postSchema
export type Post = z.infer<typeof postSchema>;

// Schema for creating a new post (frontend validation)
export const createPostInputSchema = z
  .object({
    caption: z.string().min(1, "Caption is required.").max(255).optional(),
    image: z.instanceof(File).optional(), // For file input
  })
  .refine((data) => data.caption || data.image, {
    message: "Either an image or a caption is required.",
    path: ["image"], // Attach error to image field if both are missing
  });

// TypeScript type for create post form input
export type CreatePostInput = z.infer<typeof createPostInputSchema>;
