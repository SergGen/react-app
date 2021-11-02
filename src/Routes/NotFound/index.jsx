import { Link as RouterLink } from 'react-router-dom';
import {Box, Button, Typography} from "@mui/material";

/**
 * Презентационный компонент ненайденной страницы
 * @returns {JSX.Element}
 * @constructor
 */
export const NotFound = () => {
  return (
    <Box>
      <Typography variant="h4">Page not found</Typography>
      <Button component={RouterLink} key="home" variant="contained" to="/" >
        Go to home
      </Button>
    </Box>
  )
}