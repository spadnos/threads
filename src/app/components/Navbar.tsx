import { getServerSession } from "next-auth";
import Link from "next/link";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

export default async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {!session && (
          <div>
            <li>
              <Link href="/api/auth/signin">Sign In</Link>
            </li>
          </div>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">Sign Out</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
