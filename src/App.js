import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Main from './components/Main';
import Register from './components/Register';
import HirdetesFeladasa from './components/HirdetesFeladasa';
import HirdetesForm from './components/HirdetesForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Main />} />
          <Route path="register" element={<Register />} />
          <Route path="hirdetesfeladas" element={<HirdetesFeladasa />} />
          <Route path="/hirdetesform" element={<HirdetesForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
