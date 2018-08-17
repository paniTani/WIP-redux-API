import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import { getBooks } from '../actions/bookActions';
import { Link } from 'react-router-dom'

const PaginationRow = styled.div`
    text-align: center;
    padding: 15px 0 20px;
`

const offset = 100;
const marginPageDisplayed = 1;
const pagesRangeDisplayed = 2;

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: '',
            total: 10
            // valueArr:[]
        }

        this.changePageHandler = this.changePageHandler.bind(this);
        this.searchBook = this.searchBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changePageHandler(element) {

    }

    searchBook(e) {
        e.preventDefault();
        console.log(this.props);
        // const total = this.props.booksListTotal.totalItems;
        // const pagesCount = Math.ceil(total/10);
        // const offset = Math.ceil(total/)

        let searchedValue = this.state.value;
        this.props.getBooks(searchedValue, this.state.total, offset);

        this.setState({
            // valueArr: [...this.state.valueArr, searchedValue],
            value: ''
            // total: total
        });

        console.log(this.props.books);
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
                        {/*<p>{this.props.booksListTotal.totalItems}</p>*/}
                    </Link>
                </div>
    }

    render() {
        // console.log(this.props.totalItems);
        const pagesCount = 4;
        // const offset = this.state.maxResults/pagesCount;
        // const total = this.props.booksListTotal.totalItems;
            return (
                <div>
                    <form className="search" onSubmit={this.searchBook}>
                        <label>Search word:<br/>
                            <input value={this.state.value} onChange={this.handleChange} type="text"/>
                        </label>
                        <input type="submit" ref="someName" value="Search"/>
                    </form>

                    <div className="container-book" >
                        {this.props.books && (

                            this.props.books.map((item, index) => {
                                return (
                                    this.renderData(item)
                                );
                            })

                        )}
                    </div>

                    {this.props.books && this.props.books.length !== 0 && (
                        <PaginationRow>
                            <ReactPaginate pageCount={pagesCount} marginPagesDisplayed={marginPageDisplayed} pageRangeDisplayed={pagesRangeDisplayed} onPageChange={(element) => this.changePageHandler(element)}  activeClassName="active" containerClassName="pagination"/>
                        </PaginationRow>
                    )}

                </div>
            )
    }
}

export default BooksList
