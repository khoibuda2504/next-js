import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '../layout/layout'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function FirstPost() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    // make some delay
    setLoading(true)
    sleep(3000).then(() => {
      setPosts({ title: 'New Post', description: 'Post data from Server' })
      setLoading(false)
    })
  }, [])
  if (isLoading) return <p>Loading...</p>
  if (!posts) return <p>No data</p>
  return (
    <Layout>
      <Head>
        <title>Next.js First Post</title>
      </Head>
      <h1>{posts?.title}</h1>
      <p>{posts?.description}</p>
    </Layout>
  )

}