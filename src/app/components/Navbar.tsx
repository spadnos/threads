import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/navbar/logo";
import DarkMode from "@/components/navbar/dark-mode";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

const NAVLINKS = [
  {
    label: "Threads",
    href: "/dashboard",
    protected: true,
  },

  {
    label: "About",
    href: "/about",
    protected: false,
  },
];

export default async function Navbar() {
  const session = await getServerSession();

  const user = session?.user;

  // userImage is really the signin/signout links. If the user is signed in it will also
  // include their avatar.
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
  ) : (
    <div>
      <Link href="/api/auth/signin">Sign In</Link>
    </div>
  );

  return (
    <nav className="border-b">
      <div className="container flex flex-wrap gap-4 py-4 sm:items-center justify-between text-lg font-semibold">
        <div className="flex gap-8 items-center">
          <Logo appname="threads" />
          {NAVLINKS.map((link) => {
            if (!session && link.protected) {
              return null;
            }
            return (
              <div key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </div>
            );
          })}
        </div>
        <div className="flex gap-8 items-center">
          <DarkMode />
          {userImage}
        </div>
      </div>
    </nav>
  );
}
