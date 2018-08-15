const initialState = {
    booksList: []
}

export default function books(state, action) {
    if(!state) return initialState
    let newState;
    switch (action.type) {
        case 'RECEIVE_BOOKS':

            newState = Object.assign({}, state, { booksList: action.booksList.items, booksListId: action.booksList.items });

            console.log('RECEIVE_BOOKS Action')

            return newState;
        default:
            return state;
    }
}