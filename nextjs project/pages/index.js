// import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDqJ2X9UNdTNVsDLAY-M8abS62VLzn3vnYw&usqp=CAU",
//     address: "Paris,France",
//     description: "this is the eifel tower",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_ItKmUg4bP7XkGbHxc5aUqUX2DA__s2EGw&usqp=CAU",
//     address: "Agra,India",
//     description: "this is the Taj Mahal",
//   },
// ];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   //fetch
  //   setLoadedMeetups(DUMMY);
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Meetups NextJs</title>
        <meta name="description" content="this is a meta tag which has the description which is used for seacrh engine optimizations"/>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://arindam1:czbPYkoi97d8YN8d@cluster0.kjk7l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY,
//     },
//   };
// }

export default HomePage;
