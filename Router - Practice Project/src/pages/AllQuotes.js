import QuoteList from "../components/quotes/QuoteList";

const DUMMY = [
  { id: "q1", author: "Ari", text: "this is a great Quote" },
  { id: "q2", author: "Ari", text: "This is another really great quote." },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY} />;
};
export default AllQuotes;
