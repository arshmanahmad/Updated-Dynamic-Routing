import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserInfo from './components/UserInfo';
import Admin from './views/admin/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin />} />
          <Route path='/users/:userId' element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
