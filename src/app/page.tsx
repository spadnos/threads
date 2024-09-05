import Link from "next/link";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession(options);

  // What the home page displays when the user is not authenticated
  return (
    <div className="flex flex-col items-center container">
      <h1 className="text-5xl">Home Page</h1>
      <p className="mt-8 text-left">
        This is app is used to develop and test threads. Threads are a comment
        stream (comments, replies, etc.). Threads are intended to be attached to
        other objects such as a recipe, a photo or a trip.
      </p>
      {!session && (
        <div className="mt-16 flex flex-col items-center">
          <p className="text-lg font-semibold">Sign in to get started!</p>
          <div className="mt-6">
            <Link href="/api/auth/signin" className="">
              <Button size="lg">Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
