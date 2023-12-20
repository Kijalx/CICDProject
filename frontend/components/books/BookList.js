import BookItem from './BookItem';
import classes from './BookList.module.css';

function BookList(props) {
    const books = props.books;

    console.log('props.books:', props.books);
  return (
    <ul className={classes.list}>
      {books.map((book) => (
        <BookItem
          key={book._id}
          id={book._id}
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
}

export default BookList;
