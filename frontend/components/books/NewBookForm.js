import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewBookForm.module.css';

function NewBookForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const authorInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const BookData = {
      title: enteredTitle,
      image: enteredImage,
      author: enteredAuthor,
      description: enteredDescription,
    };

    props.onAddBook(BookData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Book Title</label>
          <input type='text' required id='title' placeholder='Book Title...' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Book Cover</label>
          <input type='url' required id='image' placeholder='URL of Cover...' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' required id='author' placeholder='Author Name...' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            placeholder='Brief Description of the Book...'
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBookForm;
