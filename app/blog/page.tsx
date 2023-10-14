import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from 'next/image'
import { Metadata } from 'next'

function PostCard(post: Post) {

  return (
    <>
      <Link href={post.url} className="no-underline">
        <div className="card bg-neutral hover:bg-base-200 shadow-xl">
          <figure className="m-0">
            {post.image && (
              <Image
                src={post.image.filePath.replace('../public', '')}
                alt=""
                width={1000}
                height={500 / post.image.aspectRatio}
                blurDataURL={post.image.blurhashDataUrl}
                className='mx-auto'
              />
            )}
          </figure>
          <div className="card-body py-0 mb-5">
            <h2 className="card-title my-3 text-primary">{post.title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  
  return (
    <div className="prose mx-auto py-5">
      <div className="grid grid-cols-1 pb-5">
        <div className="card bg-neutral mx-3">
          <div className="card-body items-center text-center">
            <h1 className="text-primary font-black text-4xl md:text-6xl my-0">Blog</h1>
        </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-3">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
