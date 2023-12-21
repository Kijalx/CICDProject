import EventDetail from '../../components/books/BookDetail';
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from 'react';

export default function EventDetailPage() {
    const globalCtx = useContext(GlobalContext);
    const router = useRouter();

    let eventDetails = null;
    for (let ii = 0; ii < globalCtx.theGlobalObject.event.length; ii++) {
        let temp = globalCtx.theGlobalObject.books[ii];
        if (temp._id.trim() == router.query.eventId.trim()) {
            eventDetails = temp;
            break;
        }
    }

    // Render the EventDetail component if EventDetails is found
    return eventDetails ? (
        <EventDetail
            image={eventDetails.image}
            title={eventDetails.title}
            description={eventDetails.description}
        />
    ) : (
        <p>Event not found</p>
    );
}


{/* <EventDetail
        image = 'https://eccles.utah.edu/wp-content/uploads/2015/04/Study-Group-web.jpeg'
        title = 'Study Session'
		description = 'A study sesssion is being organised for 3pm for Business students in the Libraray on Friday!'
            ></EventDetail> */}