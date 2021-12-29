import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import Landing from './pages/Landing';
import Games from './pages/Games';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
