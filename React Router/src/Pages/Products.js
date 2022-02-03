import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Phone</Link>
        </li>
        <li>
          <Link to="/products/p2">Laptop</Link>
        </li>
        <li>
          <Link to="/products/p3">Tab</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
