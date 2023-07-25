
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home"
import Shirts from "./containers/Shirts/Shirts"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shirts" element={<Shirts />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
