import Card from '../ui/Card';
import classes from './EventItem.module.css';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import GlobalContext from '../../pages/store/globalContext';

function EventItem(props) {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  const showDetailsHandler = () => {
    router.push(`/forEvent/` + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.publisher}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default EventItem;
