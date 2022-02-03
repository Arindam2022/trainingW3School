import { Fragment } from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY = [
  { id: "q1", author: "Ari", text: "this is a great Quote" },
  { id: "q2", author: "Ari", text: "This is another really great quote." },
];

const QuoteDetail = () => {
  const param = useParams();
  const quote = DUMMY.find((quote) => quote.id === param.quoteID);

  if(!quote){
      return<p>No such quote found</p>
  };

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
