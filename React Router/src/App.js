import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Switch>
        <Route path="/" exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
