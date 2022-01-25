import { Route, Routes } from 'react-router-dom';
// Context
import { StoreProvider } from './store/Store';
// Pages
import Hero from './pages/Hero';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import Games from './pages/Games';
import Chat from './pages/Chat';
import ProtectedRoute from './pages/ProtectedRoute';
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/games/:id"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StoreProvider>
    </>
  );
}

export default App;
