import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Title of the article',
      required: true,
    },
    description: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    alt: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    date: {
      type: 'date',
      description: 'Date published',
      required: true,
    },
    image: {
      type: 'image',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'blogs',
  documentTypes: [Post],
})
