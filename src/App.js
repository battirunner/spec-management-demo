// import logo from './logo.svg';
import './App.css';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';
import "./sb-admin-2.min.css";
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Userlist from './pages/user/Userlist';
import Portal from './Portal';
import UserCreate from './pages/user/UserCreate';
import UserView from './pages/user/UserView';
import UserEdit from './pages/user/UserEdit';
import SpecList from './pages/specifications/SpecList';
import SpecCreate from './pages/specifications/SpecCreate';
import SpecView from './pages/specifications/SpecView';
import SpecEdit from './pages/specifications/SpecEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/portal' element={<Portal />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='user-list' element={<Userlist />} />
          <Route path='create-user' element={<UserCreate />} />
          <Route path='user-view/:id' element={<UserView />} />
          <Route path='user-edit/:id' element={<UserEdit />} />
          <Route path='specification-list' element={<SpecList />} />
          <Route path='create-specification' element={<SpecCreate />} />
          <Route path='specification-view/:id' element={<SpecView />} />
          <Route path='specification-edit/:id' element={<SpecEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
