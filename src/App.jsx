  
<<<<<<< HEAD
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
=======
import { BrowserRouter as Route, Switch, Redirect, Router } from "react-router-dom";
import Footer from "./layout/Footer/index";
import Header from "./layout/Header/header";
>>>>>>> dc89ca3ada5916f5236603ecd9974df74561ad32
import Home from "./pages/Home/home";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />   
      <Switch>
        <Redirect from="/Home" to="/" exact />
        <Route path="/">
          <Home />
        </Route>                 
      </Switch>
      <Footer />
      </>
  );
}

export default App;