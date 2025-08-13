import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-serif font-black text-blue-600">BlogSpace</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Technology
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Design
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Lifestyle
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex">Join Our Community</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
