"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Camera, Dumbbell, Play, Clock, Calendar, BarChart, ChevronRight } from "lucide-react"
import Header from "@/components/header"

export default function TrainingPage() {
  const [progress, setProgress] = useState(68)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Training Sessions</h1>
              <p className="text-muted-foreground">Start a new workout or continue your training plan</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Current Training Plan</CardTitle>
                    <Badge>Week 2 of 8</Badge>
                  </div>
                  <CardDescription>Strength & Conditioning Program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">12</div>
                        <div className="text-xs text-muted-foreground">Workouts</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">5.5 hrs</div>
                        <div className="text-xs text-muted-foreground">Total Time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">4 days</div>
                        <div className="text-xs text-muted-foreground">Remaining</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Continue Training</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Start New Session</CardTitle>
                  <CardDescription>Begin a new AI-guided workout</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="AI Training"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-background/80 p-3 backdrop-blur-sm">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/exercise-detection-updated.html" className="w-full">
                    <Button className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Start AI Training
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Workouts</CardTitle>
                  <CardDescription>Your scheduled training sessions</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    {["Upper Body", "Core & Abs", "Recovery"].map((workout, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <Dumbbell className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">{workout}</div>
                            <div className="text-xs text-muted-foreground">
                              {i === 0 ? "Tomorrow" : i === 1 ? "In 2 days" : "In 3 days"}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Schedule
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Training Analytics</CardTitle>
                  <CardDescription>Track your performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                    <BarChart className="h-12 w-12 text-muted-foreground" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Analytics
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Recommended Workouts</h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="strength">Strength</TabsTrigger>
                  <TabsTrigger value="cardio">Cardio</TabsTrigger>
                  <TabsTrigger value="recovery">Recovery</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <WorkoutCard key={i} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="strength" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <WorkoutCard key={i} type="Strength" />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="cardio" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <WorkoutCard key={i} type="Cardio" />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="recovery" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <WorkoutCard key={i} type="Recovery" />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function WorkoutCard({ type = "HIIT" }) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <Link href="/training/workout-1">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Workout thumbnail"
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
            <Clock className="h-3 w-3" />
            <span>25 min</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="outline" className="mb-2">
                {type}
              </Badge>
              <h3 className="font-semibold line-clamp-1">
                {type === "Strength"
                  ? "Full Body Strength"
                  : type === "Cardio"
                    ? "High Intensity Cardio"
                    : type === "Recovery"
                      ? "Active Recovery"
                      : "HIIT Workout"}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {type === "Strength"
                  ? "Build strength with this AI-guided full body workout"
                  : type === "Cardio"
                    ? "Boost your cardio fitness with this high-intensity session"
                    : type === "Recovery"
                      ? "Improve recovery and flexibility with guided stretches"
                      : "Burn calories with this efficient HIIT training"}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Dumbbell className="h-4 w-4" />
              <span>{type === "Recovery" ? "Beginner" : "Intermediate"}</span>
            </div>
            <Button size="sm" variant="secondary">
              Start
            </Button>
          </div>
        </div>
      </Link>
    </div>
  )
}

