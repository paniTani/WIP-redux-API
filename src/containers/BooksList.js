import BooksList from '../components/BooksList'
import { connect } from 'react-redux'
import { getBooks} from "../actions/bookActions";

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (value) => {dispatch(getBooks(value))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books.booksList,
        bookId: state.books.booksListId,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)