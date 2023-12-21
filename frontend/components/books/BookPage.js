import BookList from './BookList'
import { useContext } from "react";
import GlobalContext from "../../pages/store/globalContext"
import classes from '../../pages/main.module.css'

function BookPage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded === true) {
        return <BookList books={globalCtx.theGlobalObject.books} />
    }
    return <div className={classes.mainDiv}>We are loading your Books for you, Please wait...</div>
}

export default BookPage;