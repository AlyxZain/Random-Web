import { Route, Routes } from 'react-router-dom';
import { Bienvenido } from '../pages/Bienvenido';
import { Home } from '../pages/Home';

export const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/b' element={<Bienvenido />} />
    </Routes>
  );
};
