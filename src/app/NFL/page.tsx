import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { fetchNFL } from "@/actions/fetchNFL";
import { convertISODate } from "@/utils/convertISODate";
import FootBall from "@/assets/FootBallIcon";
import { Header } from "@/components/Header";

export default async function Component() {
  const NFLData = await fetchNFL("2024");

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">NFL Games</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NFLData.map((game: any, i: any) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FootBall />

                    <span className="font-semibold">
                      {game.AwayTeam} vs. {game.HomeTeam}
                    </span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {convertISODate(game.Date)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                      {game.AwayTeam} (Away)
                    </div>
                    <div className="text-2xl font-bold">
                      {game.HomeTeam} (Home)
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <div></div>
                    <div>Scheduled</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img
                    alt="Team Logo"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="font-semibold">Golden State Warriors</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  NBA - Western Conference
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">112</div>
                  <div className="text-2xl font-bold">105</div>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <div>vs. Los Angeles Lakers</div>
                  <div>Final</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img
                    alt="Team Logo"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="font-semibold">Barcelona FC</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  La Liga - Spain
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-2xl font-bold">1</div>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <div>vs. Real Madrid</div>
                  <div>Final</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img
                    alt="Team Logo"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="font-semibold">New England Patriots</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  NFL - AFC East
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-2xl font-bold">17</div>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <div>vs. Miami Dolphins</div>
                  <div>Final</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img
                    alt="Team Logo"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="font-semibold">Los Angeles Dodgers</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  MLB - National League West
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <div>vs. San Francisco Giants</div>
                  <div>Final</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img
                    alt="Team Logo"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="font-semibold">Liverpool FC</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Premier League - England
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-2xl font-bold">1</div>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <div>vs. Manchester United</div>
                  <div>Final</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img
                    alt="Team Logo"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="font-semibold">Chicago Bulls</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  NBA - Eastern Conference
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">98</div>
                  <div className="text-2xl font-bold">92</div>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <div>vs. Milwaukee Bucks</div>
                  <div>Final</div>
                </div>
              </CardContent>
            </Card> */}
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
