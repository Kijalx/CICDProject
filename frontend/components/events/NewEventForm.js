import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewEventForm.module.css';

function NewEventForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const publisherInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPublisher = publisherInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const EventData = {
      title: enteredTitle,
      eventID: enteredTitle,
      image: enteredImage,
      publisher: enteredPublisher,
      description: enteredDescription,
    };

    props.onAddEvent(EventData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Event Title</label>
          <input type='text' required id='title' placeholder='Event Title...' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Event Image</label>
          <input type='url' required id='image' placeholder='URL of Cover...' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Publisher/Group</label>
          <input type='text' required id='publisher' placeholder='Publisher Name...' ref={publisherInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            placeholder='Brief Description of the Event...'
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Event</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEventForm;
