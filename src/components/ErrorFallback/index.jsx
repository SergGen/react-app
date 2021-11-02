import {Button, Container, Typography} from "@mui/material";
import DangerousIcon from '@mui/icons-material/Dangerous';
import PropTypes from "prop-types";

export const ErrorFallback = ({error, resetErrorBoundary}) => {
    return <Container >
        <DangerousIcon fontSize="large" />
        <Typography variant="h5" >Woooooopsss... Something wrong...</Typography>
        <pre>{error.message}</pre>
        <Button variant='contained' onClick={resetErrorBoundary}>Try again</Button>
    </Container>
}

ErrorFallback.propTypes = {
    error: PropTypes.string.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired
}