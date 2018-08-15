import BooksList from '../components/BooksList'
import { connect } from 'react-redux'
import { fetchBooks} from "../actions/bookActions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: (value) => {dispatch(fetchBooks(value))},
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books.booksList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)