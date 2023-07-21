let initialState = {
    allBooks: [],
    disponibilityBooks: [], // Cambiar el nombre de la propiedad
    toRead: [],
    filter: []
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_BOOKS":
        
        return {
          ...state,
          allBooks: action.payload,
          disponibilityBooks:  action.payload
        };
        case "ADD_TOREAD":
          console.log("reducer",action.payload)
        return {
          ...state,
          toRead: [...state.toRead, action.payload],
          disponibilityBooks: state.disponibilityBooks.filter((book) => book.ISBN !== action.payload.ISBN),
           
        };
        case "REMOVE_TOREAD":
          return {
            ...state,
            disponibilityBooks: [...state.disponibilityBooks, action.payload],
            toRead: state.toRead.filter((book) => book.ISBN !== action.payload.ISBN)
          };
      // case "ADD_TOREAD":
      //   return {
      //     ...state,
      //     toRead: [...state.toRead, action.payload]
      //   };
      // case "REMOVE_TOREAD":
      //   return {
      //     ...state,
      //     toRead: state.toRead.filter((book) => book.ISBN !== action.payload)
      //   };
 case "FILTER":
  if(action.payload==="all"){
    return{
      ...state,
      disponibilityBooks: state.allBooks
          }
  }else {
    return{
      ...state,
      disponibilityBooks: state.allBooks.filter((book)=>book.genre === action.payload )
    }

  }

      default:
        return state;
    }
  };
  