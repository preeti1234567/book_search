import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Navbar from "./components/Navbar/index"
import Container from "react-bootstrap/Container"
import { BookProvider } from "./utils/BookContext"

function App() {
  return (
<BookProvider>
<Container>
      <Router>
        <div>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
        </div>
      </Router>
  </Container>
</BookProvider>

  );
}


export default App;
