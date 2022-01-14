import { Route, Routes } from 'react-router-dom';
// Context
import { StoreProvider } from './store/Store';
// Pages
import Community from './pages/Community';
import Games from './pages/Games';
import Hero from './pages/Hero';
import LogIn from './pages/LogIn';
import ProtectedRoute from './pages/ProtectedRoute';
import SignUp from './pages/SignUp';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <StoreProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/games/:id"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StoreProvider>
    </>
  );
}

export default App;
