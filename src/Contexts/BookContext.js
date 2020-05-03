import React, { createContext, useReducer, useEffect} from 'react';
import { BookReducer } from '../Reducers/BookReducer';
// create context
export const BookContext = createContext();
//create context provider
const BookContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const savedBooks = JSON.parse(localStorage.getItem('books'))
        return savedBooks ? savedBooks : []
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;