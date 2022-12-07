import Layout from "../layout/layout"
export default function Home({ posts }) {
  return (
    <Layout>
      <h2>hehe</h2>
      <h1>
        {posts.title}
      </h1>
      <p>{posts.description}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = { title: 'New Post', description: 'Post Data from getStaticProp' }
  return {
    props: {
      posts
    }
  }
}