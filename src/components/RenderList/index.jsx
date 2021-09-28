import styles from './RenderList.module.css'

export const RenderList = (props) => {

  return <div className={styles.messages_list}>
    {props.messageList.map((message, i) => <p key={i}>{message.author}: {message.text}</p>)}
  </div>
}