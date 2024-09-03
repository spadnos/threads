"use server";

import { CommentType } from "../types";

const INITIAL_COMMENTS: CommentType[] = [
  {
    text: "Comment 1",
    userId: "abc",
  },
];

export async function fetchComments() {
  return INITIAL_COMMENTS;
}
