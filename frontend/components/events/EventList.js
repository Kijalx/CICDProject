import EventItem from './EventItem';
import classes from './EventList.module.css';

function EventList(props) {
    const event = props.event;

    console.log('props.event:', props.event);
  return (
    <ul className={classes.list}>
      {event.map((event) => (
        <EventItem
          key={event._id}
          id={event._id}
          title={event.title}
          publisher={event.publisher}
        />
      ))}
    </ul>
  );
}

export default EventList;
