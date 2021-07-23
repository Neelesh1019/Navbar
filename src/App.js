import './App.css';
import Sidebar from './Components/Sidebar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
