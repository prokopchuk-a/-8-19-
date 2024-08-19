import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Game } from './pages/Game';
import { Result } from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/game' replace />} />
        <Route path='game' element={<Game />} />
        <Route path='result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
