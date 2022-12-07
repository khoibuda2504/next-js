import styles from './layout.module.css'
export default function Layout({children}) {
  return <div>
    <h1 className={styles.container}>Layout</h1>
    {children}
  </div>
}