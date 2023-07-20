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
          allBooks: [...state.allBooks, action.payload],
          disponibilityBooks:  action.payload
        };
      case "ADD_TOREAD":
        return {
          ...state,
          toRead: [...state.toRead, action.payload]
        };
      case "REMOVE_TOREAD":
        return {
          ...state,
          toRead: state.toRead.filter((book) => book.ISBN !== action.payload)
        };
      default:
        return state;
    }
  };
  