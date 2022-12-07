import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/sass/style.module.scss'


export default function FirstPost() {
  return (
    <>
    <Head>
      <title>Next.js First Post</title>
    </Head>
    <h1 className={styles.title}>First Blog Posts</h1>
    <Image src='/images/3.jpg' width='300' height={300} />
    </>
  )
}