import { useRouter } from "next/router";
const Details = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>News Details</h1>;
};
export default Details;
