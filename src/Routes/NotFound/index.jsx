import { Link } from 'react-router-dom'
import {Box} from "@material-ui/core";

/**
 * Презентационный компонент ненайденной страницы
 * @returns {JSX.Element}
 * @constructor
 */
export const NotFound = () => {
  return (
    <Box>
      <h1>Not Found</h1>
      <Link to='/' >
        Go to home
      </Link>
    </Box>
  )
}