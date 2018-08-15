import React from 'react';
import { fetchBooks } from '../actions/bookActions'
import { Link } from 'react-router-dom'

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: '',
            valueArr:[]
        }

        this.searchBook = this.searchBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    searchBook(e) {
        e.preventDefault();
        console.log(this.props);

        let searchedValue = this.state.value;
        this.props.fetchBooks(searchedValue);
        // this.props.addBookName(searchedValue);

        this.setState({
            valueArr: [...this.state.valueArr, searchedValue],
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
                    <Link to={`/bookinfo/${item.id}`} item={item}>
                        <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                        {/*<Link to={}/>*/}
                        <p>{item.volumeInfo.authors} - "{item.volumeInfo.title}"</p>
                    </Link>
                </div>
    }

    render() {
            return (
                <div>
                    <form className="search" onSubmit={this.searchBook}>
                        <label>Search word<br/>
                            <input value={this.state.value} onChange={this.handleChange} type="text"/>
                        </label>
                        <input type="submit" ref="someName" value="Add ToDo"/>
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
                </div>
            )
    }
}

export default BooksList
