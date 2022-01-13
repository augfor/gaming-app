import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
// Context
import { StoreProvider } from './store/Store';
// Components
import Navbar from './components/Navbar';
// Pages
const Community = React.lazy(() => import('./pages/Community'));
const Games = React.lazy(() => import('./pages/Games'));
const Hero = React.lazy(() => import('./pages/Hero'));
const LogIn = React.lazy(() => import('./pages/LogIn'));
const ProtectedRoute = React.lazy(() => import('./pages/ProtectedRoute'));
const SignUp = React.lazy(() => import('./pages/SignUp'));

function App() {
  return (
    <>
      <StoreProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<CircularProgress />}>
                <Hero />
              </React.Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <React.Suspense fallback={<CircularProgress />}>
                <SignUp />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<CircularProgress />}>
                <LogIn />
              </React.Suspense>
            }
          />
          <Route
            path="/games"
            element={
              <React.Suspense fallback={<CircularProgress />}>
                <Games />
              </React.Suspense>
            }
          />
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
