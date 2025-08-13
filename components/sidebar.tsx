import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, TrendingUp, Tag } from "lucide-react"

const popularPosts = [
  { title: "Getting Started with React Server Components", views: "12.5k" },
  { title: "The Psychology of Color in Web Design", views: "8.2k" },
  { title: "Building Accessible Forms", views: "6.7k" },
  { title: "Modern CSS Layout Techniques", views: "5.9k" },
]

const categories = [
  { name: "Technology", count: 24 },
  { name: "Design", count: 18 },
  { name: "Lifestyle", count: 12 },
  { name: "Business", count: 9 },
  { name: "Health", count: 7 },
]

export function Sidebar() {
  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Mail className="h-5 w-5" />
            Join Our Community
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 mb-4 text-sm leading-relaxed">
            Get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="space-y-3">
            <Input placeholder="Enter your email" className="border-blue-200 focus:border-blue-400" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <TrendingUp className="h-5 w-5" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <h4 className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors text-sm leading-snug mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-500">{post.views} views</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Tag className="h-5 w-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between group cursor-pointer">
                <span className="text-slate-700 group-hover:text-blue-600 transition-colors font-medium">
                  {category.name}
                </span>
                <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
