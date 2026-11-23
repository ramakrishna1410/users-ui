import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Login from "./pages/Login";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/edit/:id" element={<EditUser/>} />
      <Route path="/login" element={<Login />}
/>
    </Routes>
    </>
  )
}

export default App
