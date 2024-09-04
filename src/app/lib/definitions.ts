import { z } from "zod";

export const NewCommentFormSchema = z.object({
  text: z
    .string({ required_error: "Text is required" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  threadId: z
    .string({ required_error: "threadId is required" })
    .min(2, { message: "Id must be at least 2 characters long." })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        text?: string[];
        threadId?: string[];
      };
      message?: string;
    }
  | undefined;
