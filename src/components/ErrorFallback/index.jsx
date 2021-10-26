import {Button, Container, Typography} from "@mui/material";
import DangerousIcon from '@mui/icons-material/Dangerous';

export const ErrorFallback = ({error, resetErrorBoundary}) => {
    return <Container >
        <DangerousIcon fontSize="large" />
        <Typography variant="h5" >Woooooopsss... Something wrong...</Typography>
        <Typography component="p" >{error.message}</Typography>
        <Button onClick={resetErrorBoundary}>Try again</Button>
    </Container>
}