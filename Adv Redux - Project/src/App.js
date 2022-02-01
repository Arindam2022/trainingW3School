import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { useSelector } from "react-redux";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
