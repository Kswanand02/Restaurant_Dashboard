import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import Expenses from './pages/Expenses';

import './App.css';


function App() {
  return (
    <Routes>
      {/* Parent Route using Layout */}
      <Route element={<Layout />}>
        
        {/* Child Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/expenses" element={<Expenses />} />
      
      </Route>
    </Routes>
  );
}

export default App;
