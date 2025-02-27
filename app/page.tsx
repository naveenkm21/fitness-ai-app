import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Trophy, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6" />
            <span>FitAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/library" className="font-medium">
              Video Library
            </Link>
            <Link href="/training" className="font-medium">
              Training
            </Link>
            <Link href="/leaderboard" className="font-medium">
              Leaderboard
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/login?signup=true">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Fitness Journey with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get personalized workouts, real-time form correction, and track your progress with our AI-powered
                    fitness platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login?signup=true">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/library">
                    <Button size="lg" variant="outline">
                      Explore Workouts
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/HOMEIMG.png?height=550&width=550"
                width={550}
                height={550}
                alt="AI Fitness Training"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How FitAI Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform analyzes your movements, provides real-time feedback, and creates personalized
                  workout plans.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Video className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Video Library</h3>
                  <p className="text-muted-foreground">
                    Access hundreds of workout videos with detailed instructions and demonstrations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">AI Training</h3>
                  <p className="text-muted-foreground">
                    Get real-time form correction and personalized feedback during your workouts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Leaderboard</h3>
                  <p className="text-muted-foreground">
                    Compete with friends and the community to stay motivated and track progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">AI-Powered</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Train smarter, not harder
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Our AI analyzes your movements in real-time to provide personalized feedback and prevent injuries.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/training">
                    <Button size="lg">Start Training</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Form Analysis</h3>
                      <p className="text-muted-foreground">
                        AI-powered computer vision analyzes your form to prevent injuries and maximize results.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Personalized Plans</h3>
                      <p className="text-muted-foreground">
                        Get workout plans tailored to your goals, fitness level, and available equipment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Progress Tracking</h3>
                      <p className="text-muted-foreground">
                        Track your improvements over time with detailed analytics and visualizations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Dumbbell className="h-5 w-5" />
            <span>FitAI</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} FitAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

