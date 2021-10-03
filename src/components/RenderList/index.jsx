import PropTypes from 'prop-types'
import styles from './RenderList.module.css'
import { Box } from '@material-ui/core'

export const RenderList = ({messageList}) => {

  return <Box className={styles.messages_list}>
    {messageList.map(({time, author, text}) => <p key={time+author}>{author}: {text}</p>)}
  </Box>
}

export const RenderListTypes = {
  time: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

RenderList.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.shape(RenderListTypes))
}