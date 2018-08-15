import BookInfo from '../components/BookInfo'
import { connect } from 'react-redux'

const mapStateToProps= (state, ownProps) => {

    return {
        books: state.books.items
    }
}

export default connect(mapStateToProps)(BookInfo)