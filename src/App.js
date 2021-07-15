import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import SigninPage from "./pages/signin";

import Footer from "./components/Footer";
//Info section the part i am on
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
