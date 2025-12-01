import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  featuredImage?: string;
  publishedAt?: string;
}

const BlogCard = ({ title, slug, excerpt, category, featuredImage, publishedAt }: BlogCardProps) => {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link to={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        {featuredImage && (
          <div className="aspect-video overflow-hidden">
            <img
              src={featuredImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            {category && <Badge variant="secondary">{category}</Badge>}
            {publishedAt && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default BlogCard;
