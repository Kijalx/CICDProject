import BookList from '../components/books/BookList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"
import classes from './main.module.css'

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded === true) {
        return <BookList books={globalCtx.theGlobalObject.books} />
    }
    return <div className={classes.mainDiv}>We are loading your Books for you, Please wait...</div>
}

export default HomePage;