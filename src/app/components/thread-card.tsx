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

  const [showForm, setShowForm] = useState<boolean>(false);

  function handleSubmit(state: FormState, formData: FormData) {
    const result = createComment(state, formData);
    setShowForm(false);

    return result;
  }

  return (
    <div className="border-1 border-black shadow-md flex flex-col gap-4 pb-2">
      <h2 className="bg-secondary">Thread: {thread.id}</h2>
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
        <div className=" mx-4 flex justify-between">
          <span>{thread.comments?.length} comments</span>
          <LucidePlusSquare
            className=""
            size={36}
            onClick={() => {
              setShowForm(true);
            }}
          />
        </div>
      )}
      {thread.comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
