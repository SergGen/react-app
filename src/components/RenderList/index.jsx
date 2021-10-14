import styles from './RenderList.module.css'

export const RenderList = ({messageList}) => {

  return <div className={styles.messages_list}>
    {messageList.map((message,i) => <p key={i}>{message.author}: {message.text}</p>)}
  </div>
}