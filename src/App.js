import './App.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import { Login } from './pages/Login';
import { ShowInfo } from './pages/ShowInfo';
import MenuHeader from './component/MenuHeader';
import { ExportCartabl } from './pages/ٍExportCartabl';
import { ImportCartabl } from './pages/ImportCartabl';
import { Modify } from './pages/Modify';

function App() {
  return (
    <div className="App">
     <Router>
       <MenuHeader />
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/ShowInfo/:id" element={<ShowInfo />}/>
              <Route path="/logout" element={<Login />}/>
              <Route path="/exportcartabl" element={<ExportCartabl />}/>
              <Route path="/importcartabl" element={<ImportCartabl />}/>
              <Route path="/modify" element={<Modify />}/>
              
            </Routes>
      </Router>
    </div>
  );
}

export default App;
