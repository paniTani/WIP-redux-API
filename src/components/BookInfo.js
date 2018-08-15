import React, { Component } from 'react';

class BookInfo extends Component {

    constructor(props) {
        super(props)
    }

    // renderData(item) {
    //     return <div className="bookinfo-wrapper">
    //                 <p >{this.props.pageData.id}</p>
    //             </div>
    //
    // }

    render() {
        return(
            <div>
                <div className="img-div">

                    <div className="bookinfo-wrapper">
                        <p>book</p>
                    </div>
                    {/*{this.props.books && (*/}

                        {/*this.props.books.map((item, index) => {*/}
                            {/*return (*/}
                                {/*this.renderData(item)*/}
                            {/*);*/}
                        {/*})*/}

                    {/*)}*/}

                    {/*<img src={this.props.} alt=""/>*/}
                </div>
                BookInfo</div>
        )
    }
}

export default BookInfo