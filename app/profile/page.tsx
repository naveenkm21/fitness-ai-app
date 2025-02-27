"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Settings,
  Trophy,
  BarChart3,
  Calendar,
  Clock,
  Flame,
  Dumbbell,
  Heart,
  ArrowUp,
  Camera,
  Edit,
} from "lucide-react"
import Header from "@/components/header"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="relative">
                  <Avatar className="h-20 w-20 border-4 border-background">
                    <AvatarImage src="/placeholder.svg?height=80&width=80&text=User" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">Change avatar</span>
                  </Button>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">User Name</h1>
                    <Badge>Intermediate</Badge>
                  </div>
                  <p className="text-muted-foreground">Joined January 2023 • 125 workouts completed</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md grid grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="mt-3 text-2xl font-bold">3/4</div>
                      <p className="text-xs text-muted-foreground">Workouts completed this week</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold">1,248</div>
                        <Badge variant="outline" className="text-xs gap-1">
                          <ArrowUp className="h-3 w-3" />
                          12%
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">This week</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Workout Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3h 45m</div>
                      <p className="text-xs text-muted-foreground">This week</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5 days</div>
                      <p className="text-xs text-muted-foreground">Personal best: 14 days</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your latest workout sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Upper Body Strength", "HIIT Cardio", "Core Workout"].map((workout, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                              <Dumbbell className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{workout}</div>
                              <div className="text-xs text-muted-foreground">
                                {i === 0 ? "Today" : i === 1 ? "Yesterday" : "3 days ago"}
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {i === 0 ? "25 min" : i === 1 ? "35 min" : "20 min"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                      <CardDescription>Badges and milestones you've earned</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: Flame, name: "Calorie Crusher", desc: "Burn 5000 calories" },
                          { icon: Calendar, name: "Consistent", desc: "7 day streak" },
                          { icon: Dumbbell, name: "Strength Master", desc: "10 strength workouts" },
                          { icon: Heart, name: "Cardio King", desc: "15 cardio sessions" },
                          { icon: Trophy, name: "Top 50", desc: "Leaderboard rank" },
                          { icon: Clock, name: "Dedicated", desc: "10 hours total" },
                        ].map((achievement, i) => (
                          <div key={i} className="flex flex-col items-center text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                              <achievement.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="mt-2 text-xs font-medium">{achievement.name}</div>
                            <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Achievements
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="stats" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Workout Statistics</CardTitle>
                    <CardDescription>Your fitness metrics and progress over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Workout Distribution</CardTitle>
                      <CardDescription>Breakdown of your workout types</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { type: "Strength", percent: 45 },
                          { type: "Cardio", percent: 30 },
                          { type: "Flexibility", percent: 15 },
                          { type: "Recovery", percent: 10 },
                        ].map((item, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>{item.type}</span>
                              <span className="font-medium">{item.percent}%</span>
                            </div>
                            <Progress value={item.percent} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Records</CardTitle>
                      <CardDescription>Your best performances</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Longest Workout", value: "1h 15m" },
                          { name: "Most Calories Burned", value: "520 cal" },
                          { name: "Longest Streak", value: "14 days" },
                          { name: "Heaviest Weight Lifted", value: "185 lbs" },
                          { name: "Most Weekly Workouts", value: "6 sessions" },
                        ].map((record, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-sm">{record.name}</span>
                            <Badge variant="outline">{record.value}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Workout History</CardTitle>
                    <CardDescription>Your complete workout log</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {["This Week", "Last Week", "Two Weeks Ago"].map((period, periodIndex) => (
                        <div key={periodIndex}>
                          <h3 className="mb-4 text-sm font-medium">{period}</h3>
                          <div className="space-y-4">
                            {Array.from({ length: periodIndex === 0 ? 3 : 4 }).map((_, i) => (
                              <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                  {i % 3 === 0 ? (
                                    <Dumbbell className="h-6 w-6" />
                                  ) : i % 3 === 1 ? (
                                    <Flame className="h-6 w-6" />
                                  ) : (
                                    <Heart className="h-6 w-6" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">
                                    {i % 3 === 0
                                      ? "Strength Training"
                                      : i % 3 === 1
                                        ? "HIIT Cardio"
                                        : "Recovery Session"}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {i % 3 === 0
                                      ? "Upper body focus"
                                      : i % 3 === 1
                                        ? "Full body workout"
                                        : "Stretching and mobility"}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">
                                    {i % 3 === 0 ? "35 min" : i % 3 === 1 ? "25 min" : "20 min"}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {i % 3 === 0 ? "320 cal" : i % 3 === 1 ? "380 cal" : "150 cal"}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Load More
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

