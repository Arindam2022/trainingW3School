import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = [
  {
    id: "p1",
    price: 69.69,
    title: "Arindam Biography",
    description: "This is the best book you will ever read.",
  },
  {
    id: "p2",
    price: 330,
    title: "Keshav Biography",
    description: "This book is collection of Keshav's endevours.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((book) => (
          <ProductItem
            key={book.id}
            id ={book.id}
            title={book.title}
            price={book.price}
            description={book.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
