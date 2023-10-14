import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }:any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post?.title }
}

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  const Content = getMDXComponent(post!.body.code)

  return (
    <article 
      className="prose md:prose-xl prose-lg prose-headings:text-primary prose-strong:text-primary prose-li:marker:text-primary text-primary mx-auto my-5"
    >
      <div className='mx-3'>
        <h1 className='text-primary my-5'>{post?.title}</h1>
        <time dateTime={post?.date} className="text-xs text-primary">
          {format(parseISO(post!.date), 'LLLL d, yyyy')}
        </time>
        {post?.image && (
          <Image
            src={post.image.filePath.replace('../public', '')}
            alt=""
            width={1000}
            height={500 / post.image.aspectRatio}
            blurDataURL={post.image.blurhashDataUrl}
            className='mx-auto'
          />
        )}
      </div>

      <div className='text-justify mx-3'>
        <Content />
      </div>
    </article>
  )
}

export default BlogLayout
