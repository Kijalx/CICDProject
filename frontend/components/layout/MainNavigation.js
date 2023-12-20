import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  const contents = [
    {title: 'Add a new Book', webAddress: '/new-book'},
    {title: 'Printer', webAddress: '/new-book'},
    {title: 'Login', webAddress: '/login'},
  ]

  return (
    <header className={classes.header}>
      <div className={classes.title}>ATU Library</div>
      <nav>
          <ul>
            <li>
              <Link href='/'>All Books</Link>
            </li>
            <li>
              <Link href='/new-book'>Add New Book</Link>
            </li>
            <li>
              <Link href='/login-user'>Login</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
