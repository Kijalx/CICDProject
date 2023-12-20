// our-dimain.com/new-User
import Login from '../../components/login/Login'
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function LoginUser() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function loginUserHandler(enteredUserData)  {
        await globalCtx.updateGlobals({cmd: 'addUser', newVal: enteredUserData})
        router.push('/');
    }

    return <Login onLoginUser={loginUserHandler} />
}

export default LoginUser