import styles from './layout.module.css'
import Head from 'next/head'
export default function Layout({ children }) {
  return <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1 className={styles.container}>Layout</h1>
    {children}
  </div>
}