import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useState } from 'react';

function MainNavigation() {

    const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);
    const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);

    const toggleBooksDropdown = () => {
        setIsBooksDropdownOpen(!isBooksDropdownOpen);
        setIsEventsDropdownOpen(false);
    };

    const toggleEventsDropdown = () => {
        setIsEventsDropdownOpen(!isEventsDropdownOpen);
        setIsBooksDropdownOpen(false);
    };
    const selectItem = (item) => {
        setIsBooksDropdownOpen(false);
        setIsEventsDropdownOpen(false);
    };

    return (
        <header className={classes.header}>
            <Link className={classes.title} href='/'>ATU Library</Link>
            <nav>
                <ul>
                    <li className={isBooksDropdownOpen ? classes.dropdownActive : ''}>
                    <span className={classes.dropdownToggle} onClick={toggleBooksDropdown}>Books</span>
                        {isBooksDropdownOpen && (
                            <ul className={classes.dropdownMenu}>
                                <li onClick={() => selectItem('Add New Book')}>
                                    <Link href='/forBooks/new-book'>Add New Book</Link>
                                </li>
                                <li onClick={() => selectItem('All Books')}>
                                    <Link href='/forBooks/books-open'>All Books</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={isEventsDropdownOpen ? classes.dropdownActive : ''}>
                    <span className={classes.dropdownToggle} onClick={toggleEventsDropdown}>Events</span>
                        {isEventsDropdownOpen && (
                            <ul className={classes.dropdownMenu}>
                                <li onClick={() => selectItem('Add New Event')}>
                                    <Link href='/forEvents/new-event'>Add New Event</Link>
                                </li>
                                <li onClick={() => selectItem('All Events')}>
                                    <Link href='/forEvents/events-open'>All Events</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href='/forLogin/login-user'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
