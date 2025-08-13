import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
    category: "Technology",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "/modern-web-dev-workspace.png",
  },
  {
    id: 2,
    title: "Designing for Accessibility: A Complete Guide",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities.",
    category: "Design",
    author: "Marcus Johnson",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    image: "/accessibility-design-interface.png",
  },
  {
    id: 3,
    title: "The Art of Minimalist Living in a Digital Age",
    excerpt: "Discover how to simplify your life and find balance in our increasingly connected world.",
    category: "Lifestyle",
    author: "Emma Rodriguez",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "/minimalist-modern-living-space.png",
  },
  {
    id: 4,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "A deep dive into architectural patterns that help create maintainable and scalable software systems.",
    category: "Technology",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "12 min read",
    image: "/software-architecture-diagram.png",
  },
  {
    id: 5,
    title: "Color Psychology in User Interface Design",
    excerpt: "Understanding how colors influence user behavior and emotions in digital interfaces.",
    category: "Design",
    author: "Lisa Park",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    image: "/placeholder-elrpt.png",
  },
  {
    id: 6,
    title: "Remote Work: Building Meaningful Connections",
    excerpt: "Strategies for maintaining team cohesion and personal relationships in a distributed work environment.",
    category: "Lifestyle",
    author: "Alex Thompson",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    image: "/remote-work-home-office.png",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-serif font-bold text-slate-800">Latest Articles</h2>
        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
          {blogPosts.length} Posts
        </Badge>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:col-span-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className={`${
                        post.category === "Technology"
                          ? "bg-blue-100 text-blue-700"
                          : post.category === "Design"
                            ? "bg-cyan-100 text-cyan-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
