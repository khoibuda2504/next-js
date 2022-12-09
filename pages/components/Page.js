import Layout from '../layout/layout'
export default function Page({ posts }) {
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

export async function getServerSideProps() {
  const posts = { title: 'New Post', description: 'Post Data from getServerSideProps' }
  return {
    props: {
      posts
    }
  }
}