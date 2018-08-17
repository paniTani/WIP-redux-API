import request from 'superagent';

export const getBooks = (value, total, offset) => {
    return (dispatch) => {
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: value, maxResults: total, startIndex: offset }) //'q' as the origin url looks like:'https://www.googleapis.com/books/v1/volumes?q=sea'
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        const data = JSON.parse(res.text)
                        dispatch( {
                            type: 'RECEIVE_BOOKS',
                            booksList: data
                        })
                        break;
                }
            })
    };
}
