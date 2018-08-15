import BookInfo from '../components/BookInfo'
import { connect } from 'react-redux'

const mapStateToProps= (state, ownProps) => {

    return {
        match: ownProps.match,
        bookItemInfo: state.books.booksList.filter((book) => {

            return book.id === ownProps.match.params.id
        })[0]
    }
}

export default connect(mapStateToProps)(BookInfo)