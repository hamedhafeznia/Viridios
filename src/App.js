import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesWrraper } from './Routes'

import './App.css';

function App() {
  return (
    <Router>
      <RoutesWrraper />
    </Router>
    // <div className="App">
    //   <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    //   </div>
    // </div>
  );
}

export default App;
