import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }


  const contents = [
    {title: 'Add a new Book', webAddress: '/new-book'},
    {title: 'Printer', webAddress: '/new-book'}, 
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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
