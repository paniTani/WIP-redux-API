const initialState = {
    booksList: [],
    booksListTotal: []
}

export default function books(state, action) {
    if(!state) return initialState
    let newState;
    switch (action.type) {
        case 'RECEIVE_BOOKS':

            newState = Object.assign({}, state, { booksList: action.booksList.items, booksListTotal: action.booksList });

            console.log('RECEIVE_BOOKS Action')

            return newState;
        default:
            return state;
    }
}