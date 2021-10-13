import './App.css';
import NavBar from './components/NavBar';
import ContestantPage from './components/ContestantPage';
import ContestantInfo from './components/ContestantInfo';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
      <div className="App">
        <Router>
          <NavBar></NavBar>
          <Switch>
              <Route exact path = "/">
                  <ContestantPage></ContestantPage>
              </Route>
              <Route exact path = "/:id">
                  <ContestantInfo></ContestantInfo>
              </Route>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
