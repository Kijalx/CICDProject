import BookDetail from '../../../components/books/BookDetail';
import { useRouter } from 'next/router';
import GlobalContext from "../../store/globalContext";
import { useContext } from 'react';

export default function BookDetailPage() {
    const globalCtx = useContext(GlobalContext);
    const router = useRouter();

    let bookDetails = null;
    for (let ii = 0; ii < globalCtx.theGlobalObject.books.length; ii++) {
        let temp = globalCtx.theGlobalObject.books[ii];

        if (temp.bookID == router.query.bookId.trim()) {
            bookDetails = temp;
            break;
        }
    }

    return bookDetails ? (
        <BookDetail
            image={bookDetails.image}
            title={bookDetails.title}
            description={bookDetails.description}
        />
    ) : (
        <p>Book not found</p>
    );
}