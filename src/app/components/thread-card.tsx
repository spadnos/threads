import { fetchComments } from "../lib/comments/actions";
import { ThreadType } from "../lib/types";

type Props = {
  thread: ThreadType;
};

export default async function ThreadCard({ thread }: Props) {
  const comments = await fetchComments(thread.id);

  return (
    <div className="border-1 border-black shadow-md flex flex-col gap-4">
      <h2 className="bg-slate-200">Thread: {thread.id}</h2>
      <span>{comments.length} comments</span>
    </div>
  );
}
