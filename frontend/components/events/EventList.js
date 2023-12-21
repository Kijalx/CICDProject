import EventItem from './EventItem';
import classes from './EventList.module.css';

function EventList(props) {
    const events = props.events;

    console.log('props.event:', props.events);
  return (
    <ul className={classes.list}>
      {events.map((events) => (
        <EventItem
          key={events._id}
          id={events._id}
          title={events.title}
          publisher={events.publisher}
        />
      ))}
    </ul>
  );
}

export default EventList;
