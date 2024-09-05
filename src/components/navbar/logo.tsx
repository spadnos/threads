import Link from "next/link";

function Logo({ appname }: { appname: string }) {
  return (
    <div>
      <Link className="text-2xl font-semibold flex" href="/">
        <span className="text-purple-800">Seetula</span>
        <div className="capitalize">{appname}</div>
      </Link>
    </div>
  );
}
export default Logo;
