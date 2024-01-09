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