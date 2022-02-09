import { Fragment } from "react";
import Link from "next/link";
const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='/news/newnew'>Go to the detailed page</Link>
        </li>
        <li>hello</li>
        <li>bye bye </li>
      </ul>
    </Fragment>
  );
};
export default NewsPage;
