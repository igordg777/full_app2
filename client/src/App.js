import logo from './logo.svg';
import './App.css';
import SaveUser from './components/SaveUsers';
import GetUsers from './components/GetUsers'
function App() {
  return (
    <div className="App">
      <SaveUser />
      <GetUsers />
    </div>
  );
}

export default App;
