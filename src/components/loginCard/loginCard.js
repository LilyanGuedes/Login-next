import styles from './loginCard.module.css'

const LoginCard = ({title, children}) => {
  return (
    <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        {children}
    </div>
  )
}

export default LoginCard