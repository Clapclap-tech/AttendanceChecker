import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/"></Route>
            <SignUp></SignUp>
          </Switch>
        </Router>
      </>
    );
}

export default App
