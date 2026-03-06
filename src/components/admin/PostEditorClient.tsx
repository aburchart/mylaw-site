'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

interface PostData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image: string;
}

interface PostEditorClientProps {
  mode: 'new' | 'edit';
  initialData?: PostData;
}

export function PostEditorClient({ mode, initialData }: PostEditorClientProps) {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [slug, setSlug] = useState(initialData?.slug ?? '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? '');
  const [content, setContent] = useState(initialData?.content ?? '');
  const [category, setCategory] = useState(initialData?.category ?? '');
  const [featuredImage, setFeaturedImage] = useState(initialData?.featured_image ?? '');

  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (mode === 'new') {
      setSlug(generateSlug(value));
    }
  };

  const handleSave = async (publish: boolean) => {
    if (!title || !slug || !content) {
      toast({
        title: 'Validation Error',
        description: 'Title, slug, and content are required',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const postData = {
        title,
        slug,
        excerpt,
        content,
        category: category || null,
        featured_image: featuredImage || null,
        published: publish,
        published_at: publish ? new Date().toISOString() : null,
        author_id: user?.id,
      };

      if (mode === 'new') {
        const { error } = await supabase.from('blog_posts').insert(postData);
        if (error) throw error;
        toast({ title: 'Success', description: 'Post created successfully' });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', initialData!.id!);
        if (error) throw error;
        toast({ title: 'Success', description: 'Post updated successfully' });
      }
      router.push('/admin/dashboard');
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save post',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>{mode === 'new' ? 'Create New Post' : 'Edit Post'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter post title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="post-url-slug"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of the post"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g., Healthcare, Compliance"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here..."
                rows={15}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleSave(false)} variant="outline" disabled={loading}>
                Save as Draft
              </Button>
              <Button onClick={() => handleSave(true)} disabled={loading}>
                {loading ? 'Saving...' : 'Publish'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
