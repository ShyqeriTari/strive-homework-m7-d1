import './App.css';
import HomePage from './components/HomePage';
import CompanyJobs from './components/CompanyJobs';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/:company" element={<CompanyJobs />} />
</Routes>
</HashRouter>
  );
}

export default App;
