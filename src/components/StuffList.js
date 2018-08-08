import { connect } from 'react-redux';
import React from 'react';
import { fetchBooks } from '../actions/stuffActions'

class stuffList extends React.Component {
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

        this.setState({
            valueArr: [...this.state.valueArr, searchedValue],
            value:''
        });

        // this.state.valueArr.push(searchedValue)

    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    renderData(item) {
        return <div className="book" key={item.id}>
                    <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                    <p>{item.volumeInfo.authors} - "{item.volumeInfo.title}"</p>
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
                        {this.props.stuff && (

                            this.props.stuff.map((item, index) => {
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

function mapStateToProps(state) {
    return {
        stuff: state.stuff.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: (value) => { dispatch(fetchBooks(value)) }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);
