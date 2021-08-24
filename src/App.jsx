  
import { BrowserRouter as Route, Switch, Redirect, Router } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import SignUp from "./pages/Authentication/SignUp/signup";
import SignIn from "./pages/Authentication/SignIn/signin";
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