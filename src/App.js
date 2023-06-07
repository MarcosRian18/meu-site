import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/layouts/Header"
import Inicio from "./components/pages/Inicio"


function App() {
  return (
    <Router>
         <Header />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
        </Routes>

      </Router>

  );
}

export default App;