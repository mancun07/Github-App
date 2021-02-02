import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import AlertState from './context/AlertState'
import UsersState from './context/UsersState'

function App() {

  return (
    <UsersState>
    <AlertState>
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container section">
      <Switch>
      <Route exact path={"/Github-App"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/users/:id"} component={UserDetails}/>
      </Switch>
      </div>
  
    </div>
    </Router>
    </AlertState>
    </UsersState>
  );
}

export default App;
