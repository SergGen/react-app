import './App.css';
import { Container, CssBaseline } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Routes } from './Routes/Routes'

/**
 * Компонент-контейнер приложения
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Container>
          <Header/>
          <Layout>
            <Routes />
          </Layout>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;