import { Route } from 'react-router';
import { Login } from './views/Login';
import './styles/App.css';
import { Contact } from './views/Contact';
import Particles from 'react-particles-js';
import ParticlesConfig from './configs/ParticlesConfig';
import logo from './logo.svg';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute' }}>
        <Particles height="100vh" width="100vw" params={ParticlesConfig} />
      </div>
      <header className="App-header">
        <Route exact path='/' component={Login} />
        <Route exact path='/contact' component={Contact} />
      </header>
    </div>
  );
}

export default App;
