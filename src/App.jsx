  
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
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