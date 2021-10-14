import {useState, useRef, useEffect} from 'react'
import styles from './Messages.module.css'

export const Messages = ({onSubmit}) => {
  const [inputValue,setInputValue] = useState('');

  let areaInput = useRef(null);

  let onChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(()=>{
    areaInput.current.focus();
  },[]);

  let sendHandler = () => {
    if(inputValue.trim() !== '') {
      onSubmit(inputValue.trim());
    }
    setInputValue('');
    areaInput.current.focus();
  }

  return <form className={styles.message_form} onSubmit={(event) => event.preventDefault()}>
    <textarea className={styles.area} name="chat" ref={areaInput} value={inputValue} onChange={onChange} />
    <button className={styles.send_btn} onClick={sendHandler}>Send message</button>
  </form>
}