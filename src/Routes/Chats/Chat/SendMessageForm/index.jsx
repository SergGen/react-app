import {useState, useEffect, useRef} from 'react'
import { Button, TextareaAutosize } from '@material-ui/core'
import styles from './SendMessageForm.module.css'
import {sendMessage} from "../../../../store/chats/slices";
import { useDispatch } from "react-redux";
import {useParams} from "react-router-dom";

export const SendMessageForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  let {chatId} = useParams();
  let areaInput = useRef(null);

  let onChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    areaInput.current?.focus();
  },[])

  const sendHandler = () => {
    if(inputValue.trim() !== '') {
      dispatch(sendMessage({
        chatId: chatId,
        msgData: {
          author: 'You',
          text: inputValue.trim()
        }
      }));
    }
    setInputValue('');
    areaInput.current?.focus();
  }

  return <form className={styles.message_form} onSubmit={(event) => event.preventDefault()}>
    <TextareaAutosize
      aria-label="You"
      className={styles.area}
      placeholder="Write your message here"
      variant="outlined"
      ref={areaInput}
      value={inputValue}
      onChange={onChange}
    />
    <Button variant="contained" onClick={()=>sendHandler()}>Send message</Button>
  </form>
}