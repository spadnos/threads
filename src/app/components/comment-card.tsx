import Image from "next/image";
import { CommentType } from "../lib/types";
import { User } from "lucide-react";
import TimeAgo from "react-timeago";

type Props = {
  comment: CommentType;
};

export default function CommentCard({ comment }: Props) {
  if (!comment) {
    return null;
  }

  const userImage = comment.user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={comment.user?.image}
      width={48}
      height={48}
      alt={comment.user?.username ?? "Profile Pic"}
      priority={true}
    />
  ) : (
    <User />
  );

  return (
    <section className="flex flex-col gap-4 border-2 border-slate-400 p-2 rounded-md shadow-md">
      <div className="flex gap-4 ">
        {userImage}
        <div>{comment.user.username}</div>
        <TimeAgo date={comment.createdAt} />
      </div>
      <p className="text-left">{comment.text}</p>
    </section>
  );
}
