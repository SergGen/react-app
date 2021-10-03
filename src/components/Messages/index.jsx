import {useState, useEffect, useRef} from 'react'
import { Button, TextareaAutosize } from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './Messages.module.css'

export const Messages = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState('');

  let areaInput = useRef(null);

  let onChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    areaInput.current?.focus();
  },[inputValue])

  let sendHandler = () => {
    if(inputValue.trim() !== '') {
      onSubmit(inputValue.trim());
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

    <Button variant="contained" onClick={sendHandler}>Send message</Button>
  </form>
}

Messages.propTypes = {
  onSubmit: PropTypes.func.isRequired
}