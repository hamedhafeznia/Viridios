import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesWrraper } from './Routes'
import { Navigation } from 'components/Shared/Navigation'

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <RoutesWrraper />
    </Router>
  );
}

export default App;
