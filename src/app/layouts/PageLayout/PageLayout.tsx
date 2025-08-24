import styles from './PageLayout.module.scss'

export function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container}>{children}</div>
  )
}