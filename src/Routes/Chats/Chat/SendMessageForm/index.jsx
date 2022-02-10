import {Box, IconButton, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from "prop-types";

/**
 * Презентационный компонент отрисовки поля ввода текста сообщения и его отправки
 * @param {Object} chat - объект с сообщениями текущего чата
 * @param {Function} onCatchText - обрабочик для захвата введённого текста в черновик
 * @param {Function} sendHandler - обработчик отправки сообщения
 * @param areaInput - ref для фокусировки в поле ввода
 * @returns {JSX.Element}
 * @constructor
 */
export const SendMessageForm = ({chat, onCatchText, sendHandler, areaInput}) => {

  return (
      <>
      {chat ? <Box mb="20px" sx={{display: "flex", alignItems: 'flex-end'}}
                     component="form" onSubmit={(event) => event.preventDefault()}>
          <TextField aria-label="You" multiline fullWidth minRows={4}
                     placeholder="Write your message here" ref={areaInput} value={chat?.currentTextDraft}
                     onChange={onCatchText} onKeyDown={sendHandler}
          />
          <IconButton disabled={chat?.currentTextDraft.trim() === ''} size='large' variant="contained" onClick={sendHandler}>
            <SendIcon/>
          </IconButton>
        </Box> : ''}
      </>
  );
}

SendMessageForm.propTypes = {
    chat: PropTypes.shape({
        chatName: PropTypes.string,
        currentTextDraft: PropTypes.string,
    }),
    onCatchText: PropTypes.func.isRequired,
    sendHandler: PropTypes.func.isRequired,
    areaInput: PropTypes.object.isRequired
}