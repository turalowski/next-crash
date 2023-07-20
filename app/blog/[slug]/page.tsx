/* Always fetch the latest data */
export const dynamic = 'force-dynamic';

/* OR */

/* Update the cache every n seconds */
export const revalidate = 420;

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    res => res.json()
  );
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content/', {
    // cache: 'force-cache'
  }).then(res => res.json());
  const post = posts.find(post => post.slug === params.slug);

  if (!post) {
    return <div>Couldn`t find the values</div>;
  }
  return (
    <main className="flex">
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.content}</CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
