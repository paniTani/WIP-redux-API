import * as actionTypes from './actionTypes';
import request from 'superagent';

function receiveStuff(data) {
    return {
        type: actionTypes.RECEIVE_STUFF,
        stuff: data
    };
}

export const fetchBooks = (value) => {
    return (dispatch) => {
        request
            .get('https://www.googleapis.com/books/v1/volumes')

            .query({ q: value }) //'q' as the origin url looks like:'https://www.googleapis.com/books/v1/volumes?q=sea'
            .end((err, res) => {
                switch (res.statusCode) {
                    case 200:
                        const data = JSON.parse(res.text)
                        // console.log('code: ' + res.statusCode);
                        // console.log('val in fetchStuff: ' + value)
                        dispatch(receiveStuff(data))
                        break;
                }
            })
    };
}


