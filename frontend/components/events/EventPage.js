import EventList from './EventList'
import { useContext } from "react";
import GlobalContext from "../../pages/store/globalContext"
import classes from '../../pages/main.module.css'

function EventPage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded === true) {
        return <EventList events={globalCtx.theGlobalObject.events} />
    }
    return <div className={classes.mainDiv}>We are loading the Events for you, Please wait...</div>
}

export default EventPage;