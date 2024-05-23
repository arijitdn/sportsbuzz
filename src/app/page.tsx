import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import FootBall from "@/assets/FootBallIcon";
import IconCricket from "@/assets/CricketIcon";

export default async function Component() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <div className="hidden md:block w-72 bg-gray-100 border-r dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">Popular Leagues</h3>
            <div className="space-y-2">
              <Link
                className="flex items-center gap-2 hover:underline"
                href="/NFL"
              >
                <TrophyIcon className="w-6 h-6" />
                <span>Scheduled NFL Games</span>
              </Link>
              <Link
                className="flex items-center gap-2 hover:underline"
                href="/cricket-series"
              >
                <TrophyIcon className="w-6 h-6" />
                <span>Cricket Series List</span>
              </Link>
              <Link
                className="flex items-center gap-2 hover:underline"
                href="/cricket-matches"
              >
                <TrophyIcon className="w-6 h-6" />
                <span>Current Cricket Matches</span>
              </Link>
            </div>
          </div>
        </div>
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Select a option</h1>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline">
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <TrophyIcon className="w-4 h-4 mr-2" />
                    Sport
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrophyIcon className="w-4 h-4 mr-2" />
                    League
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrophyIcon className="w-4 h-4 mr-2" />
                    Team
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline">
                    <ListIcon className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ClockIcon className="w-4 h-4 mr-2" />
                    Start Time
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrophyIcon className="w-4 h-4 mr-2" />
                    League
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <GroupIcon className="w-4 h-4 mr-2" />
                    Team
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={"/NFL"}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FootBall />
                    <span className="font-semibold">Scheduled NFL Games</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Get all the information about the upcoming NFL games and the
                    match lists.
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href={"/cricket-series"}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <IconCricket />
                    <span className="font-semibold">Cricket Series List</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Get all the information about the upcoming cricket series
                    and the match lists.
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href={"/cricket-matches"}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <IconCricket />
                    <span className="font-semibold">
                      Current Cricket Matches
                    </span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Get all the information about the current cricket series and
                    their scores.
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function GroupIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
