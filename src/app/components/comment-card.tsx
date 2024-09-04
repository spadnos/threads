import Image from "next/image";
import { CommentType } from "../lib/types";

type Props = {
  comment: CommentType;
};

export default function Card({ comment }: Props) {
  const userImage = comment.user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={comment.user?.image}
      width={48}
      height={48}
      alt={comment.user?.username ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        {userImage}
        <div>username</div>
        <div>xx days ago</div>
      </div>
      <p className="text-2xl text-center">{comment.text}</p>
    </section>
  );
}
