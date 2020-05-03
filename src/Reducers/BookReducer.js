import { v4 as uuidv4 } from 'uuid';

export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuidv4(),
                isRead: false
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        case 'READ_BOOK':
            const book = state.find(book => book.id === action.id);
            if(book){
               return state.map(book => 
                    book.id === action.id 
                    ? {...book, isRead: !book.isRead} : book
                ) 
            }
            return state;
        default:
            return state;
    }
}