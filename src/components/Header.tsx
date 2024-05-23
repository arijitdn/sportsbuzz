import IconCricket2 from "@/assets/CricketIcon2";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
      <div className="flex justify-between items-center gap-4 w-full">
        <Link
          className="text-2xl font-bold flex items-center justify-center gap-2"
          href="/"
        >
          <IconCricket2 /> SportsBuzz
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="hover:underline" href="/NFL">
            Scheduled NFL Games
          </Link>
          <Link className="hover:underline" href="/cricket-series">
            Cricket Series List
          </Link>
          <Link className="hover:underline" href="#">
            Current Cricket Matches
          </Link>
        </nav>
      </div>
    </header>
  );
};
