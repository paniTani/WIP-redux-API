import BooksList from '../components/BooksList'
import { connect } from 'react-redux'
import { getBooks} from "../actions/bookActions";

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (value, total, offset) => {dispatch(getBooks(value, total, offset))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books.booksList,
        booksListTotal: state.books.booksListTotal
        // bookId: state.books.booksListId,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)