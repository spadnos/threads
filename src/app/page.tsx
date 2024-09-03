import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);

  // What the home page displays when the user is authenticated?
  if (session) {
    return <UserCard user={session?.user} pagetype={"Home"} />;
  }

  // What the home page displays when the user is not authenticated
  return (
    <div className="flex flex-col items-center container">
      <h1 className="text-5xl">Home Page</h1>
      <p className="mt-8 text-left">
        This is what you will see when you are not authenticated.
      </p>
    </div>
  );
}
