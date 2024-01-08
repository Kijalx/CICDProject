// our-dimain.com/new-User
import Login from '../../../components/login/Login'
import { useRouter } from 'next/router';
import GlobalContext from "../../store/globalContext"
import { useContext } from 'react'
import PrinterList from "../../../components/printer/PrinterList";
import classes from "../../main.module.css";

function LoginUser() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded === true) {
        return <Login login={globalCtx.theGlobalObject.login} />
    }

}

export default LoginUser