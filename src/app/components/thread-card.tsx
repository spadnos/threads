"use client";

import { LucideMinusSquare, LucidePlus, LucidePlusSquare } from "lucide-react";
import { ThreadType } from "../lib/types";
import { useState } from "react";
import { createComment } from "../actions/comments";
import CommentForm from "./comment-form";
import { useFormState } from "react-dom";
import { FormState } from "../lib/definitions";
import CommentCard from "./comment-card";
import { revalidatePath } from "next/cache";

type Props = {
  thread: ThreadType;
};

export default function ThreadCard({ thread }: Props) {
  const [state, action] = useFormState(handleSubmit, undefined);

  // const comments = fetchComments(thread.id);
  const [showForm, setShowForm] = useState<boolean>(false);

  function handleSubmit(state: FormState, formData: FormData) {
    const result = createComment(state, formData);
    setShowForm(false);

    return result;
  }

  return (
    <div className="border-1 border-black shadow-md flex flex-col gap-4">
      <h2 className="bg-slate-200">Thread: {thread.id}</h2>
      {showForm && (
        <div>
          <LucideMinusSquare
            size={36}
            onClick={() => {
              setShowForm(false);
            }}
          />
          <CommentForm threadId={thread.id} action={action} />
        </div>
      )}
      {!showForm && (
        <LucidePlusSquare
          className=""
          size={36}
          onClick={() => {
            setShowForm(true);
          }}
        />
      )}
      <span>{thread.comments?.length} comments</span>
      {thread.comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
