import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

const NAVLINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Server",
    href: "/server",
  },
  {
    label: "Client",
    href: "/client",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default async function Navbar() {
  const session = await getServerSession();

  const user = session?.user;

  const userImage = user?.image ? (
    <div className="flex gap-4 items-center">
      <Link href="/api/auth/signout">Sign Out</Link>
      <Image
        className="border-1 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto"
        src={user?.image}
        width={48}
        height={48}
        alt={user?.name ?? "Profile Pic"}
        priority={true}
      />
    </div>
  ) : null;

  return (
    <nav className="bg-blue-800 p-4">
      <div className="flex justify-between items-center text-2xl font-bold">
        <div className="flex gap-8">
          {NAVLINKS.map((link) => {
            return (
              <div key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </div>
            );
          })}
        </div>

        {!session && (
          <div>
            <li>
              <Link href="/api/auth/signin">Sign In</Link>
            </li>
          </div>
        )}

        {userImage}
      </div>
    </nav>
  );
}
