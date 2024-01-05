import './styles/app/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AccountsPage from './pages/AccountsPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/accounts" element={<AccountsPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
