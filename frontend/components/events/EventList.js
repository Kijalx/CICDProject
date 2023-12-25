import EventItem from './EventItem';
import classes from './EventList.module.css';

function EventList(props) {
    const events = props.events;

    console.log('props.events:', props.events);
  return (
    <ul className={classes.list}>
      {events.map((events) => (
        <EventItem
          key={events.eventID}
          id={events.eventID}
          title={events.title}
          publisher={events.publisher}
        />
      ))}
    </ul>
  );
}

export default EventList;
