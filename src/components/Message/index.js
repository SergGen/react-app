import styles from './Message.module.css'

export const Message = (props) => {
  return <p className={styles.border + (props.active ? ` ${styles.active}` : '')}>{props.text}</p>
}