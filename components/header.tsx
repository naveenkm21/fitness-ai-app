import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dumbbell, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
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
          <Link href="/profile">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=U" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
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
                <Link href="/profile" className="font-medium">
                  Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

