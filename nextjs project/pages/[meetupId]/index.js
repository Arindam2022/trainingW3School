// import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    //     <Fragment>
    //     <img
    //       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDqJ2X9UNdTNVsDLAY-M8abS62VLzn3vnYw&usqp=CAU"
    //       alt="anything"
    //     />
    //     <h1>First Meetup</h1>
    //     <address>No -9, street</address>
    //     <p>this is our first meetup</p>
    //   </Fragment>
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://arindam1:czbPYkoi97d8YN8d@cluster0.kjk7l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  
  return {
    fallback: false,
    paths: meetups.map((meetup) => (
       {params: {
        meetupId: meetup._id.toString()
      }}
    )),
    // paths: [
    //   {
    //     params: { meetupId: "m1" },
    //   },
    //   {
    //     params: { meetupId: "m2" },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        "mongodb+srv://arindam1:czbPYkoi97d8YN8d@cluster0.kjk7l.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const meetupCollection = db.collection("meetups");
    
      const selectedMeetup = await meetupCollection.findOne({_id: ObjectId(meetupId)});
    
      client.close();
      
  console.log(meetupId);
  //fetch data
  return {
    props: {
      meetupData: { id:selectedMeetup._id.toString(),
        title:selectedMeetup.title,
        address:selectedMeetup.address,
        description:selectedMeetup.description,
        image:selectedMeetup.image

        // image:
        //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDqJ2X9UNdTNVsDLAY-M8abS62VLzn3vnYw&usqp=CAU",
        // id: meetupId,
        // title: "First Meetup",
        // address: "No -9, street",
        // description: "this is our first meetup",
      },
    },
  };
}

export default MeetupDetails;
