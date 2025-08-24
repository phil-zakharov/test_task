import styles from './MainLayout.module.scss'

export function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container}>{children}</div>
  )
}