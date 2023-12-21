import BookItem from './BookItem';
import classes from './BookList.module.css';

function BookList(props) {
    const books = props.books;

    console.log('props.books:', props.books);
  return (
    <ul className={classes.list}>
      {books.map((book) => (
        <BookItem
          key={book.bookID}
          id={book.bookID}
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
}

export default BookList;
