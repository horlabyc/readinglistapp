import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return (  
        <li>
            <div className="wrapper">
                <div className="book" onClick={ () =>  dispatch({type: 'REMOVE_BOOK', id: book.id})}>
                    <div className="title">{ book.title }</div>
                    <div className="author">{ book.author }</div>
                </div>
                <div className="action">
                    <input type="checkbox" defaultChecked={book.isRead} onChange={ () => dispatch({type: 'READ_BOOK', id: book.id})}/>
                </div>
            </div>
            
        </li>
    );
}
 
export default BookDetails;