// our-dimain.com/new-User
import NewUser from '../../components/login/NewUser'
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function AddUser() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addUserHandler(enteredUserData)  {
        await globalCtx.updateGlobals({cmd: 'addUser', newVal: enteredUserData})
        router.push('/');
    }

    return <NewUser onAddUser={addUserHandler} />
}

export default AddUser