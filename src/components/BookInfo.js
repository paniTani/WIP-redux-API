import React, { Component } from 'react';

class BookInfo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className="img-div">
                    <div className="bookinfo-wrapper">
                        <h1>{this.props.bookItemInfo.volumeInfo.title}</h1>
                        <img src={this.props.bookItemInfo.volumeInfo.imageLinks.thumbnail} alt=""/>
                        <p>Language: {this.props.bookItemInfo.volumeInfo.language}</p>
                        <p>Pages: {this.props.bookItemInfo.volumeInfo.pageCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookInfo