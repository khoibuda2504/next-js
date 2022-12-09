import { getAllPosts } from '../lib/helper'
import { useRouter } from 'next/router'
export default function Post({ post }) {
  const router = useRouter()
  const { id } = router.query
  return (
    
    <article>
      <button onClick={() => router.push('/posts/user')}>
        Post
      </button>
      {
        post.map(item => (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>
        ))
      }
    </article>
  )
}

export async function getStaticProps({ params: { id } }) {
  const post = getAllPosts(id)
  return {
    props: {
      post
    }
  }
}
export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}