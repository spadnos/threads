"use client";

import { useFormState, useFormStatus } from "react-dom";

import { createComment } from "../actions/comments";
import { FormState } from "../lib/definitions";
import { Button } from "@/components/ui/button";

function CommentForm({ threadId, action }: { threadId: string; action: any }) {
  // const [state, action] = useFormState(createComment, undefined);

  return (
    <form action={action} className="flex flex-col">
      <div className="flex gap-2 items-center mx-2 mt-4">
        <textarea
          id="text"
          name="text"
          placeholder="Enter comment..."
          autoFocus
          className="w-full"
        />
        <input type="hidden" name="threadId" value={threadId} />
        <SubmitButton />
      </div>
      {/* {state?.messages && <p>{state.messages.join(", ")}</p>} */}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      Comment
    </Button>
  );
}
export default CommentForm;
