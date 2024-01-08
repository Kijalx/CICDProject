// pages/store/globalContext.js
import { createContext, useState, useEffect } from 'react';
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const [globals, setGlobals] = useState({
    aString: 'init val',
    count: 0,
    hideHamMenu: true,
    books: [],
    dataLoaded: false
  });

  useEffect(() => {
    getAllBooks();
    getAllEvents();
    getAllLogin();
    getAllPrinters();
  }, []);

  async function getAllBooks() {
    try {
      const response = await fetch('/api/get-books', {
        method: 'POST', // Ensure it's a GET request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        books: data.books,
        dataLoaded: true,
      }));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  async function getAllEvents() {
    try {
      const response = await fetch('/api/get-events', {
        method: 'POST', // Ensure it's a GET request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        events: data.events,
        dataLoaded: true,
      }));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  async function getAllLogin() {
    try {
      const response = await fetch('/api/get-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data.login);
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        login: data.login,
        dataLoaded: true,
      }));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  async function getAllPrinters() {
    try {
      const response = await fetch('/api/get-printer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        printers: data.printers,
        dataLoaded: true,
      }));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }


  async function editGlobalData(command) {
    if (command.cmd === 'hideHamMenu') {
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        hideHamMenu: command.newVal
      }));
    }
    if (command.cmd === 'addBook') {
      const response = await fetch('/api/new-book', {
        method: 'POST',
        body: JSON.stringify(command.newVal),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        books: [...previousGlobals.books, command.newVal]
      }));
    }
    if (command.cmd === 'addEvent') {
      const response = await fetch('/api/new-event', {
        method: 'POST',
        body: JSON.stringify(command.newVal),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        events: [...previousGlobals.events, command.newVal]
      }));
    }
    if (command.cmd === 'addUser') {
      const response = await fetch('/api/new-login', {
        method: 'POST',
        body: JSON.stringify(command.newVal),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        books: [...previousGlobals.books, command.newVal]
      }));
    }
    if (command.cmd === 'removeBook') {
      const response = await fetch('/api/remove-book', {
        method: 'POST',
        body: JSON.stringify({ bookID: command.newVal }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.removeBookResponse === 'success') {
        setGlobals((previousGlobals) => ({
          ...previousGlobals,
          books: previousGlobals.books.filter(book => book.bookID !== command.newVal)
        }));
      } else {
        console.error('Error removing book:', data.error);
      }
    }
  }

  const context = {
    updateGlobals: editGlobalData,
    theGlobalObject: globals
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
