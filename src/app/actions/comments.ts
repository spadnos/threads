"use server";

import { revalidatePath } from "next/cache";
import { FormState, NewCommentFormSchema } from "../lib/definitions";
import { CommentType, ThreadType } from "../lib/types";

const COMMENTS: CommentType[] = [
  {
    id: "a1",
    text: "Comment 1",
    userId: "u1",
    user: {
      id: "u1",
      username: "spadnos",
      email: "spadnos@gmail.com",
      image: null,
    },
    threadId: "t1",
    createdAt: new Date("Aug 29, 2024"),
  },
];

const THREADS: ThreadType[] = [{ id: "t0" }, { id: "t1" }];

export async function fetchComments(id: string) {
  return COMMENTS.filter((comment) => comment.threadId === id);
}

export async function createComment(state: FormState, formData: FormData) {
  // validate the data
  const data = Object.fromEntries(formData);
  const validatedData = NewCommentFormSchema.safeParse(data);
  if (!validatedData.success) {
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
      messages: validatedData.error.errors.map((error) => error.message),
    };
  }

  const newComment = {
    ...validatedData.data,
    id: `c${COMMENTS.length}`,
    userId: "u1",
    user: {
      id: "u1",
      username: "spadnos",
      email: "spadnos@gmail.com",
      image: null,
    },
    createdAt: new Date(),
  };
  COMMENTS.push(newComment);
  revalidatePath("/dashboard");

  return { success: true };
}

export async function fetchThreads() {
  return THREADS.map((thread) => {
    return {
      ...thread,
      comments: COMMENTS.filter((comment) => comment.threadId === thread.id),
    };
  });
}

export async function createThread() {
  const newThread = {
    id: `t${THREADS.length}`,
  };
  THREADS.push(newThread);
}
