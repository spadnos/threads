import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { CommentType } from "../lib/types";
import { fetchComments } from "../lib/comments/actions";

export default async function ServerPage() {
  const session = await getServerSession(options);

  //   const comments: CommentType[] = [];
  const comments = await fetchComments();

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Comments</h1>
      {comments.length < 1 && <div>No Comments yet.</div>}
      {comments.map((comment, index) => {
        return <div key={index}>{comment.text}</div>;
      })}
    </section>
  );
}
