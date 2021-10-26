import './App.css';
import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Routes } from './Routes/Routes';
import {ErrorBoundary} from 'react-error-boundary';
import {ErrorFallback} from "./components/ErrorFallback";

/**
 * Компонент-контейнер приложения
 * @returns {JSX.Element}
 * @constructor
 */
export const App = () => {

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <ErrorBoundary
            FallbackComponent = {ErrorFallback}
        >
          <Container>
            <Header/>
            <Layout>
              <Routes />
            </Layout>
          </Container>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}