import { Route, Router } from 'react-router';
import { Login } from './views/Login';
import { Contact } from './views/Contact';
import { AnalyticsView } from './views/AnalyticsView';
import { WijmoGrid } from './components/WijmoGrid';
import history from './services/History';
import './styles/App.css';
import Particles from 'react-particles-js';
import ParticlesConfig from './configs/ParticlesConfig';
import Info from './views/Info';
import { RepairsView } from './views/RepairsView';
import { UserProfile } from './views/UserProfile';
import Registration from './views/Registration';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute' }}>
        <Particles height="100vh" width="100vw" params={ParticlesConfig} />
      </div>
      <header className="App-header">
        <Router history = {history}>
          <Route exact path='/' component={Login} />
          <Route exact path='/WorkshopManager_Web/' component={Login} />

          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Info' component={Info} />
          <Route exact path='/AnalyticsView' component={AnalyticsView} />
          <Route exact path='/Repairs' component={RepairsView} />
          <Route exact path='/WorkshopManager_Web/WijmoGrid' component={WijmoGrid} />

          <Route exact path='/user-profile' component={UserProfile} />
          <Route exact path='/WorkshopManager_Web/user-profile' component={UserProfile} />

          <Route exact path='/WorkshopManager_Web/Registration' component={Registration} />
        </Router>
      </header>
    </div>
  );
}

export default App;
