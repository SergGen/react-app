import { Link as RouterLink } from 'react-router-dom';
import {Box, Button} from "@mui/material";

/**
 * Презентационный компонент ненайденной страницы
 * @returns {JSX.Element}
 * @constructor
 */
export const NotFound = () => {
  return (
    <Box>
      <h1>Page not found</h1>
        <Button
            component={RouterLink}
            key="home"
            variant="body2"
            to="/"
        >
        Go to home
      </Button>
    </Box>
  )
}