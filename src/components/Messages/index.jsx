import React from 'react'
import styles from './Messages.module.css'

export const Messages = (props) => {
  const [inputValue,setInputValue] = React.useState('');

  let areaInput = React.createRef();

  let onChange = (event) => {
    setInputValue(event.target.value);
  }

  let sendHandler = () => {
    if(inputValue.trim() !== '') {
      props.onSubmit(inputValue.trim());
    }
    setInputValue('');
    areaInput.current.focus();
  }

  return <form className={styles.message_form} onSubmit={(event) => event.preventDefault()}>
    <textarea className={styles.area} name="chat" ref={areaInput} value={inputValue} onChange={onChange} />
    <button className={styles.send_btn} onClick={sendHandler}>Send message</button>
  </form>
}