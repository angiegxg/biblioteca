import data from '../../books.json'
export const GET_BOOKS = "GET_BOOKS"
export const ADD_TOREAD = "ADD_TOREAD"
export const REMOVE_TOREAD = "REMOVE_TOREAD"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const MEMORY = "MEMORY"
export const UPDATE_DATA = "UPDATE_DATA" // memoria
export const LOCAL_PERSIST = "LOCAL_PERSIST"// persistencia pestañas

export function getBooks(){
    const books=data.library.map((book)=>book.book)
    console.log(books)
    return{
        type:GET_BOOKS,
        payload:books
    }
}

export function addToRead(book) {
    return {
        type: ADD_TOREAD,
        payload: book
    }

}

export function removeToRead(id) {
    return{
        type:REMOVE_TOREAD,
        payload: id
    }
    
}

export function filterBooks(genre) {
    return{
        type:FILTER,
        payload:genre
    }
    
}

export function orderToRead(order) {
    return{
        type:ORDER,
        payload: order
    }
    
}

