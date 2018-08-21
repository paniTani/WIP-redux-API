import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import { getBooks } from '../actions/bookActions';
import { Link } from 'react-router-dom'

const PaginationRow = styled.div`
    text-align: center;
    padding: 15px 0 20px;
`

let offset = 0;
let currentPage = 0;
const marginPageDisplayed = 1;
const pagesRangeDisplayed = 20;

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: '',
            perPage: 10,
            offset: 0
        }

        this.changePageHandler = this.changePageHandler.bind(this);
        this.searchBook = this.searchBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changePageHandler(element) {
        const selectedPage = element.selected;
        const offset = selectedPage * this.state.perPage;

        localStorage.setItem('offset', offset);
        localStorage.setItem('selectedPage', selectedPage);
        currentPage = +localStorage.getItem('selectedPage');

        this.setState({offset: offset}, () => {
            this.props.getBooks(localStorage.getItem('value'), localStorage.getItem("offset"));
        })
    }

    searchBook(e) {
        e.preventDefault();
        const searchedValue = this.state.value;

        localStorage.setItem('value', searchedValue);
        localStorage.setItem('offset', '0');
        currentPage = 0;

        this.props.getBooks(searchedValue, offset);
        this.setState({
            value: ''
        });
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    renderData(item) {
        return <div className="book" key={item.id}>
                    <Link to={`/bookinfo/` + item.id} item={item}>
                        <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                        <p>{item.volumeInfo.authors} - "{item.volumeInfo.title}"</p>
                    </Link>
                </div>
    }

    render() {
        const total = this.props.booksListTotal;
        const pagesCount = Math.ceil(total/this.state.perPage);

            return (
                <div>
                    <form className="search" onSubmit={this.searchBook}>
                        <label>Search word:<br/>
                            <input value={this.state.value} onChange={this.handleChange} type="text"/>
                        </label>
                        <input type="submit" ref="someName" value="Search"/>
                    </form>
                    <p>total: {total}</p>

                    <div className="container-book" >
                        {this.props.books && this.props.books.length !== 0 ? (

                            this.props.books.map((item, index) => {
                                return (
                                    this.renderData(item)
                                );
                            })
                        ) : <div>No results found</div>}
                    </div>

                    {this.props.books && this.props.books.length !== 0 && (
                        <PaginationRow>
                            <ReactPaginate pageCount={pagesCount} marginPagesDisplayed={marginPageDisplayed} forcePage={currentPage} pageRangeDisplayed={pagesRangeDisplayed} previousLabel="" nextLabel="" onPageChange={(element) => this.changePageHandler(element)}  activeClassName="active" containerClassName="pagination"/>
                        </PaginationRow>
                    )}

                </div>
            )
    }
}

export default BooksList
