import './App.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import { User } from './pages/User';
import { ShowInfo } from './pages/ShowInfo';
import MenuHeader from './component/MenuHeader';

function App() {
  return (
    <div className="App">
     <Router>
       <MenuHeader />
          <Routes>
              <Route path="/" element={<User />}/>
              <Route path="/ShowInfo/:id" element={<ShowInfo />}/>
              <Route path="/logout" element={<User />}/>
              
            </Routes>
      </Router>
    </div>
  );
}

export default App;
