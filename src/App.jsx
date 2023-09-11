import './App.css';
import Banner from './components/Banner/Banner.jsx';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
      <Routes>
        <Route  path="/" element={<TodoPage />} />
        <Route  path="/followers" element={<FollowersPage />} />
        <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
