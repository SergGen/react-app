import { Box } from '@mui/material';

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