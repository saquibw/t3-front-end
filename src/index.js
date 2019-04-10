import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board.js'

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/reducer.js';


const initialState = {
    blocks: Array(9).fill(null),
    xIsNext: true,
    isGameOver: false,
};
const store = createStore(reducer, initialState);

class Container extends React.Component {
    render() {
        return (
            <Board/>         
        );
    }
}

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('root'));


