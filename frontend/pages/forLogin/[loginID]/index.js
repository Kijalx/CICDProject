import BookDetail from '../../../components/books/BookDetail';
import { useRouter } from 'next/router';
import GlobalContext from "../../store/globalContext";
import { useContext } from 'react';

export default function LoginDetail() {
    const globalCtx = useContext(GlobalContext);
    const router = useRouter();

    let loginDetails = null;
    for (let ii = 0; ii < globalCtx.theGlobalObject.login.length; ii++) {
        let temp = globalCtx.theGlobalObject.login[ii];

        if (temp.loginID == router.query.loginId.trim()) {
            loginDetails = temp;
            break;
        }
    }

    return loginDetails;
}