import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCast from './components/AllCast';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allCast' element={<AllCast />} />


      </Routes>
    </div>
  );
}

export default App;
