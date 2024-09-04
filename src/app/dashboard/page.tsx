import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { createThread, fetchThreads } from "../lib/comments/actions";
import CreateThread from "../components/create-thread";
import ThreadCard from "../components/thread-card";
import { revalidatePath } from "next/cache";

export default async function ServerPage() {
  const session = await getServerSession(options);

  //   const comments: CommentType[] = [];
  const threads = await fetchThreads();

  const handleNewThread = async () => {
    "use server";
    await createThread();
    revalidatePath("/dashboard");
  };

  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Threads</h1>
      <CreateThread createThread={handleNewThread} />
      <div className="inline-block text-center justify-center w-full mt-4">
        {threads.length < 1 && <div>No threads yet.</div>}
        <div className="grid grid-cols-3 gap-4">
          {threads.map((thread) => {
            return <ThreadCard key={thread.id} thread={thread} />;
          })}
        </div>
      </div>
    </section>
  );
}
