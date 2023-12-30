import { useRouter } from 'next/router';
import GlobalContext from "../../store/globalContext";
import { useContext } from 'react';
import EventDetail from "../../../components/events/EventDetail";

export default function BookDetailPage() {
    const globalCtx = useContext(GlobalContext);
    const router = useRouter();

    let eventDetails = null;
    for (let ii = 0; ii < globalCtx.theGlobalObject.events.length; ii++) {
        let temp = globalCtx.theGlobalObject.events[ii];

        if (temp.eventID == router.query.eventId.trim()) {
            eventDetails = temp;
            break;
        }
    }

    // Render the BookDetail component if bookDetails is found
    return eventDetails ? (
        <EventDetail
            image={eventDetails.image}
            title={eventDetails.title}
            description={eventDetails.description}
        />
    ) : (
        <p>Book not found</p>
    );
}


{/* <BookDetail
        image = 'https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg'
        title = 'Harry Potter and the Goblet of Fire'
		description = 'The fourth Harry Potter book plunges to depths of the wizarding world we haven’t seen before. Quite literally, in the case of this cover, which shows Harry underwater, braving Hogwarts’ Great Lake. The scene is taken from the Triwizard Tournament, which serves as the main vein of this book’s plot – focusing on Harry’s second task as a reluctant Hogwarts champion. The mysterious greens and blues of this cover encapsulate the enigmatic atmosphere of Harry’s underwater mission. And eagle-eyed Harry Potter fans may spot some fun details in the background!'
            ></BookDetail> */}