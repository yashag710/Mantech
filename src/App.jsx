import './App.css'
import { BrowserRouter , Route , Routes } from "react-router"
import LoginPage from './components/Login';
import NewUserForm from './components/NewUserForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/newuser' element={<NewUserForm />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
