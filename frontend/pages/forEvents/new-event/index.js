// our-dimain.com/new-Book
import NewEventForm from '../../../components/events/NewEventForm'
import { useRouter } from 'next/router';
import GlobalContext from "../../store/globalContext"
import { useContext } from 'react'

function NewEventPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addEventHandler(enteredBookData)  {
        await globalCtx.updateGlobals({cmd: 'addEvent', newVal: enteredEventData})
        router.push('/events-open');
    }

    return <NewEventForm onAddEvent={addEventHandler} />
}

export default NewEventPage