"use server";

import { redirect } from "next/navigation";
import { CommentType, ThreadType } from "../types";

const COMMENTS: CommentType[] = [
  {
    id: "a1",
    text: "Comment 1",
    userId: "abc",
    user: {
      id: "u1",
      username: "spadnos",
      email: "spadnos@gmail.com",
      image: null,
    },
    threadId: "t1",
  },
];

const THREADS: ThreadType[] = [{ id: "t0" }, { id: "t1" }];

export async function fetchComments(id: string) {
  console.log("fetchComments", id);
  return COMMENTS.filter((comment) => comment.threadId === id);
}

export async function fetchThreads() {
  return THREADS;
}

export async function createThread() {
  const newThread = {
    id: `t${THREADS.length}`,
  };
  THREADS.push(newThread);
}
