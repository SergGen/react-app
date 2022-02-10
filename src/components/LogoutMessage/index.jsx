import {Box, Button, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {LOGIN_PATH} from "../../Routes/RoutesBlock";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * Презентационный компонент для информирования о необходимости регистрации или входа.
 * @returns {JSX.Element}
 * @constructor
 */
export const LogoutMessage = () => {
    return (
        <>
            <Typography variant="h5">You should Login first.</Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <ArrowRightAltIcon />
                <Button component={RouterLink} to={LOGIN_PATH}>Login page</Button>
            </Box>
        </>
    );
}