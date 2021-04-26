import { Route } from 'react-router';
import { Login } from './views/Login';
import './styles/App.css';
import { Contact } from './views/Contact';

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
    <div>
    <Route exact path='/' component={Login} />
    <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
