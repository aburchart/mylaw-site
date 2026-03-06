'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Pencil, Trash2, Plus, LogOut, Eye } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

interface AdminDashboardClientProps {
  initialPosts: BlogPost[];
}

export function AdminDashboardClient({ initialPosts }: AdminDashboardClientProps) {
  const router = useRouter();
  const { signOut } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      setPosts(posts.filter((post) => post.id !== id));
      toast({ title: 'Success', description: 'Post deleted successfully' });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({ title: 'Error', description: 'Failed to delete post', variant: 'destructive' });
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const newPublishedState = !post.published;
      const { error } = await supabase
        .from('blog_posts')
        .update({
          published: newPublishedState,
          published_at: newPublishedState ? new Date().toISOString() : null,
        })
        .eq('id', post.id);
      if (error) throw error;
      setPosts(
        posts.map((p) =>
          p.id === post.id
            ? { ...p, published: newPublishedState, published_at: newPublishedState ? new Date().toISOString() : null }
            : p
        )
      );
      toast({ title: 'Success', description: `Post ${newPublishedState ? 'published' : 'unpublished'} successfully` });
    } catch (error) {
      console.error('Error toggling publish state:', error);
      toast({ title: 'Error', description: 'Failed to update post', variant: 'destructive' });
    }
  };

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your blog posts</p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/admin/posts/new">
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {posts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground mb-4">No posts yet</p>
              <Button asChild>
                <Link href="/admin/posts/new">Create your first post</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle>{post.title}</CardTitle>
                        <Badge variant={post.published ? 'default' : 'secondary'}>
                          {post.published ? 'Published' : 'Draft'}
                        </Badge>
                      </div>
                      <CardDescription>
                        Created: {new Date(post.created_at).toLocaleDateString()}
                        {post.published_at && (
                          <> • Published: {new Date(post.published_at).toLocaleDateString()}</>
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {post.published && (
                        <Button asChild variant="ghost" size="icon">
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      <Button asChild variant="ghost" size="icon">
                        <Link href={`/admin/posts/${post.id}/edit`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant={post.published ? 'outline' : 'default'}
                    onClick={() => handleTogglePublish(post)}
                  >
                    {post.published ? 'Unpublish' : 'Publish'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
