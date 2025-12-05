// app/schemas/tagged.schema.ts
import { z } from "zod";
import { postSchema } from "./post.schema";

export const taggedPostSchema = postSchema.extend({
  tagged_by: z.string(),
});

export const taggedPostsSchema = z.array(taggedPostSchema);

export type TaggedPost = z.infer<typeof taggedPostSchema>;