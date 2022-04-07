import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
