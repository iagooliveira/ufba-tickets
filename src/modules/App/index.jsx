import MainPage from "../MainPage/index.jsx";
import MainHeader from "../MainPage/submodules/MainHeader";
import Footer from "../MainPage/submodules/footer/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocalsPage from "../LocalsPage/index.jsx";
import EventsPage from "../EventsPage/index.jsx";
import UsersPage from "../UsersPage/index.jsx";
const App = () => {
  return (
    <>
      <Router>
        <MainHeader />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/locals-page" component={LocalsPage} />
          <Route path="/events-page" component={EventsPage} />
          <Route path="/users-page" component={UsersPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
