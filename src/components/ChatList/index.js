import {Box, List, ListItem, ListItemButton, ListItemText} from '@material-ui/core';
import PropTypes from 'prop-types'
import { RenderListTypes } from '../RenderList'

export const ChatList = ({chatList}) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {chatList.map(({id, name}) =>
            <ListItem disablePadding key={id}>
              <ListItemButton>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
    </Box>
  );
}

ChatList.propTypes = {
  chatList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.shape(RenderListTypes))
  }))
}