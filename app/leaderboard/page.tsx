import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, Filter, ArrowUp, ArrowDown, Flame, Dumbbell, Clock } from "lucide-react"
import Header from "@/components/header"

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Leaderboard</h1>
              <p className="text-muted-foreground">See how you rank against other users in the community</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Tabs defaultValue="weekly" className="w-full sm:w-auto">
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="alltime">All Time</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <div className="rounded-lg border shadow-sm">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Top Performers</h2>
                  </div>
                  <div className="divide-y">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8">
                            {i === 0 ? (
                              <Trophy className="h-6 w-6 text-yellow-500" />
                            ) : i === 1 ? (
                              <Medal className="h-6 w-6 text-gray-400" />
                            ) : i === 2 ? (
                              <Award className="h-6 w-6 text-amber-700" />
                            ) : (
                              <span className="text-lg font-bold text-muted-foreground">{i + 1}</span>
                            )}
                          </div>
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
                            <AvatarFallback>U{i}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">User {i + 1}</div>
                            <div className="text-sm text-muted-foreground">
                              {i === 0 ? "Elite" : i < 3 ? "Advanced" : i < 6 ? "Intermediate" : "Beginner"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-medium">{1200 - i * 100} pts</div>
                            <div className="flex items-center justify-end gap-1 text-xs">
                              {i % 3 === 0 ? (
                                <>
                                  <ArrowUp className="h-3 w-3 text-green-500" />
                                  <span className="text-green-500">+{(10 - i) * 5}%</span>
                                </>
                              ) : i % 3 === 1 ? (
                                <>
                                  <ArrowDown className="h-3 w-3 text-red-500" />
                                  <span className="text-red-500">-{i * 2}%</span>
                                </>
                              ) : (
                                <span className="text-muted-foreground">No change</span>
                              )}
                            </div>
                          </div>
                          <Badge variant={i < 3 ? "default" : "outline"}>#{i + 1}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border shadow-sm">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Your Ranking</h2>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder.svg?height=64&width=64&text=You" />
                        <AvatarFallback>YOU</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-xl font-bold">Your Name</div>
                        <div className="text-muted-foreground">Intermediate</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border p-3 text-center">
                        <div className="text-2xl font-bold">#24</div>
                        <div className="text-xs text-muted-foreground">Current Rank</div>
                      </div>
                      <div className="rounded-lg border p-3 text-center">
                        <div className="text-2xl font-bold">780</div>
                        <div className="text-xs text-muted-foreground">Points</div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <ArrowUp className="h-4 w-4 text-green-500" />
                        <span>Up 3 positions</span>
                      </div>
                      <div className="text-sm text-muted-foreground">This week</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border shadow-sm">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Top Categories</h2>
                  </div>
                  <div className="divide-y">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Flame className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Calories Burned</div>
                          <div className="text-sm text-muted-foreground">Top 15%</div>
                        </div>
                      </div>
                      <Badge>#12</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Strength Training</div>
                          <div className="text-sm text-muted-foreground">Top 30%</div>
                        </div>
                      </div>
                      <Badge variant="outline">#28</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Workout Time</div>
                          <div className="text-sm text-muted-foreground">Top 20%</div>
                        </div>
                      </div>
                      <Badge variant="outline">#19</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

