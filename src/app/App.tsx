import './styles/global.css';
import { StoreProvider } from './providers/store';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Nav } from '~/widgets/nav/Nav';
import { Routes } from './providers/router';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <MainLayout>
          <Nav />
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
