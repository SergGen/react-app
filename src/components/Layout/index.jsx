import { Box } from '@material-ui/core'

/**
 * Компонент разметки
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const Layout = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  );
};