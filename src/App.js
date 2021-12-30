import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import Landing from './pages/Landing';
import Games from './pages/Games';
import Community from './pages/Community';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
