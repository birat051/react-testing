import './App.css';
import Banner from './components/Banner/Banner.jsx';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
      <Routes>
        <Route  path="/" element={<TodoPage />} />
        <Route  path="/followers" element={<FollowersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
