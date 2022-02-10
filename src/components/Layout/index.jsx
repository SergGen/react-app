import {Box, Container} from '@mui/material';
import {Header} from "../Header";
import {Outlet} from "react-router-dom";

/**
 * Презентационный компонент разметки рабочей области
 * @returns {JSX.Element}
 * @constructor
 */
export const Layout = () => {
  return (
    <Box>
      <Header/>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};