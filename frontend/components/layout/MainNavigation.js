import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  return (
    <header className={classes.header}>
      <Link className={classes.title} href='/'>ATU Library</Link>
      <nav>
          <ul>
            <li>
                <Link href='/forBooks/new-book'>Add New Book</Link>
                <Link href='/forBooks/books-open'>All Books</Link>
            </li>
          <li>
              <Link href='/forEvents/new-event'>Add New Event</Link>
              <Link href='/forEvents/events-open'>All Events</Link>
          </li>
            <li>
              <Link href='/forLogin/login-user'>Login</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
