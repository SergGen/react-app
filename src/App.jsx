import './App.css';
import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Routes } from './Routes/Routes';

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
        <Header/>
        <Container>
          <Layout>
            <Routes />
          </Layout>
        </Container>
      </BrowserRouter>
    </>
  );
}