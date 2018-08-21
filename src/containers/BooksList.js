import BooksList from '../components/BooksList'
import { connect } from 'react-redux'
import { getBooks} from "../actions/bookActions";

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (value, offset) => {dispatch(getBooks(value, offset))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books.booksList,
        booksListTotal: state.books.booksListTotal.totalItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
