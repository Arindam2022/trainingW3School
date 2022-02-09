import { useRouter } from "next/router";
import Head from 'next/head'
import { Fragment } from "react/cjs/react.production.min";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.replace("/");
  }

  return (
    <Fragment>
      <Head>
        <title >New Meetup</title>
        <meta name="description" content="Here you can add the new meetup places "/>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetupPage;
