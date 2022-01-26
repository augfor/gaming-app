import { useState } from 'react';
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
// store
import ImageContext from './store/ImageContext';
// Components
import Navbar from './components/Navbar';

function App() {
  const [imagePreview, set_imagePreview] = useState(null);

  return (
    <>
      <StoreProvider>
        <ImageContext.Provider
          value={{
            imagePreview,
            set_imagePreview
          }}
        >
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
        </ImageContext.Provider>
      </StoreProvider>
    </>
  );
}

export default App;
