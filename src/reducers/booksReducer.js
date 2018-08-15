const initialState = {
    booksList: [],

}

export default function books(state, action) {
    if(!state) return initialState
    let newState;
    switch (action.type) {
        case 'RECEIVE_BOOKS':

            newState = Object.assign({}, state, { booksList: action.booksList.items });

            console.log('RECEIVE_BOOKS Action')
            return newState;
        // case 'ADD_BOOK_NAME':
        //     newState = {...{}, ...state}
        //     newState.bookNameArr = [...newState.bookNameArr, action.bookName]
        //     console.log("newState.bookNameArr in reducer: " + newState.bookNameArr)
        //     return  newState;
        default:
            return state;
    }
}