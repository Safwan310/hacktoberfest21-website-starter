import "./App.css";
import NavBar from "./components/NavBar";
import ContestantPage from "./components/ContestantPage";
import ContestantInfo from "./components/ContestantInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContestant from "./components/AddContestant";
import DeleteContestant from "./components/DeleteContestant";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <ContestantPage/>
          </Route>
          <Route exact path = "/addContestant">
            <AddContestant/>
          </Route>
          <Route exact path = "/deleteContestant">
            <DeleteContestant/>
          </Route>
          <Route exact path="/:id">
            <ContestantInfo/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
