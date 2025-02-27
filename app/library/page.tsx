import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Search, Filter, Clock, Flame } from "lucide-react";
import Header from "@/components/header";

const videoData = {
  all: [
    { title: "Full Body Dumbbell Workout", url: "https://www.youtube.com/embed/Sou12pLJFCc", category: "Full Body", calories: 350, level: "Intermediate" },
    { title: "Strength Training for Beginners", url: "https://www.youtube.com/embed/PfAAU3hVu5U", category: "Strength", calories: 400, level: "Advanced" },
    { title: "HIIT Cardio Blast", url: "https://www.youtube.com/embed/iMqj2R62CO8", category: "Cardio", calories: 500, level: "Intermediate" },
    { title: "Morning Yoga Routine", url: "https://www.youtube.com/embed/wTX5ya6zuYs", category: "Yoga", calories: 200, level: "Beginner" }
  ],
  strength: [
    { title: "Strength Training for Beginners", url: "https://www.youtube.com/embed/PfAAU3hVu5U", category: "Strength", calories: 400, level: "Advanced" },
    { title: "Upper Body Strength Workout", url: "https://www.youtube.com/embed/-SwqeFpf26Y", category: "Strength", calories: 450, level: "Intermediate" }
  ],
  cardio: [
    { title: "HIIT Cardio Blast", url: "https://www.youtube.com/embed/iMqj2R62CO8", category: "Cardio", calories: 500, level: "Intermediate" },
    { title: "Jump Rope HIIT Workout", url: "https://www.youtube.com/embed/uBGYht2hSPU", category: "Cardio", calories: 600, level: "Advanced" }
  ],
  yoga: [
    { title: "Morning Yoga Routine", url: "https://www.youtube.com/embed/wTX5ya6zuYs", category: "Yoga", calories: 200, level: "Beginner" },
    { title: "Relaxing Yoga for Flexibility", url: "https://www.youtube.com/embed/G-Z9BXM9Gy0", category: "Yoga", calories: 150, level: "Beginner" }
  ]
};

export default function VideoLibraryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Video Library</h1>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="strength">Strength</TabsTrigger>
                <TabsTrigger value="cardio">Cardio</TabsTrigger>
                <TabsTrigger value="yoga">Yoga</TabsTrigger>
              </TabsList>
              {Object.keys(videoData).map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {videoData[category].map((video, i) => (
                      <VideoCard key={i} video={video} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function VideoCard({ video }) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <Link href="/library/video-1">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <iframe
            width="100%"
            height="200"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-4">
          <Badge variant="outline" className="mb-2">
            {video.category}
          </Badge>
          <h3 className="font-semibold line-clamp-1">{video.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {video.category} workout to burn calories and improve fitness.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Flame className="h-4 w-4 text-orange-500" />
              <span>{video.calories} cal</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Dumbbell className="h-4 w-4" />
              <span>{video.level}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
