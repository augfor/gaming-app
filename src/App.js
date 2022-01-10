import { Route, Routes } from 'react-router-dom';
// Context
import { StoreProvider } from './store/Store';
// Pages
import Landing from './pages/Landing';
import Games from './pages/Games';
import Community from './pages/Community';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <StoreProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<Community />} />
        </Routes>
      </StoreProvider>
    </>
  );
}

export default App;
