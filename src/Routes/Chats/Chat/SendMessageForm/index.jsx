import {Box, IconButton, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

/**
 * Презентационный компонент отрисовки поля ввода текста сообщения и его отправки
 * @returns {JSX.Element}
 * @constructor
 */
export const SendMessageForm = ({chat, onCatchText, sendHandler, areaInput}) => {

  return <Box mb="20px" sx={{display: "flex", alignItems: 'flex-end'}}
              component="form" onSubmit={(event) => event.preventDefault()}>
    <TextField aria-label="You" multiline fullWidth minRows={4}
      placeholder="Write your message here" ref={areaInput} value={chat.currentTextDraft}
      onChange={onCatchText} onKeyDown={sendHandler}
    />
    <IconButton disabled={chat.currentTextDraft.trim() === ''} size='large' variant="contained" onClick={sendHandler}>
      <SendIcon/>
    </IconButton>
  </Box>
}