// our-dimain.com/new-Book
import NewBookForm from '../../../components/books/NewBookForm'
import { useRouter } from 'next/router';
import GlobalContext from "../../store/globalContext"
import { useContext } from 'react'

function NewBookPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addBookHandler(enteredBookData)  {
        await globalCtx.updateGlobals({cmd: 'addBook', newVal: enteredBookData})
        router.push('/forBooks/books-open');
    }

    return <NewBookForm onAddBook={addBookHandler} />
}

export default NewBookPage