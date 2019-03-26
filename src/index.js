import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board.js'

//import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import reducer from './reducers'

class Container extends React.Component {
    render() {
        return (
            <Board/>         
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));


