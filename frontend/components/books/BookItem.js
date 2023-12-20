import Card from '../ui/Card';
import classes from './BookItem.module.css';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import GlobalContext from '../../pages/store/globalContext';

function BookItem(props) {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  const showDetailsHandler = () => {
    router.push(`/` + props.id);
  };

  async function removeBookHandler() {
    await globalCtx.updateGlobals({ cmd: 'removeBook', newVal: props.id });
    router.push('/');
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={removeBookHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
