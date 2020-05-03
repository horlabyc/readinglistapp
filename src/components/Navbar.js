import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    const unreadBooks = books.filter(book => !book.isRead)
    return (  
        <div className="navbar">
            <h1>Geek Reading List</h1>
            <p>You have {unreadBooks.length} book(s) to get through...</p>
        </div>
    );
}
 
export default Navbar;