import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Buttons from './pages/Buttons';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Buttons />} path="/buttons" />
      </Routes>
    </Layout>
  );
}

export default App;
