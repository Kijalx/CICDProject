// pages/store/globalContext.js
import { createContext, useState, useEffect } from 'react';

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
  }, []);

  async function getAllBooks() {
    try {
      const response = await fetch('/api/get-books', {
        method: 'POST',
        body: JSON.stringify({ books: 'all' }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setGlobals((previousGlobals) => ({
        ...previousGlobals,
        books: data.books,
        dataLoaded: true
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
    if (command.cmd === 'removeBook') {
      const response = await fetch('/api/remove-book', {
        method: 'POST',
        body: JSON.stringify({ _id: command.newVal }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.removeBookResponse === 'success') {
        setGlobals((previousGlobals) => ({
          ...previousGlobals,
          books: previousGlobals.books.filter(book => book._id !== command.newVal)
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
