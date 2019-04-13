import React from 'react';
import Block from './Block.js';
import { connect } from 'react-redux';
import { setBlock, setNextPlayer, setGameOver, updateGameStatus} from '../actions/action';
import Axios from 'axios';

class Board extends React.Component {

renderBlock(i) {
    return (
        <Block 
        value={this.props.blocks[i]}
        onClick={() => this.handleClick(i)}
        />
    )
}

handleClick(i) { 
    if(this.props.blocks[i] || this.props.isGameOver) {
        return;
    }
    let block = this.props.xIsNext ? 'X' : 'O';    

    this.props.setNextPlayer(this.props.xIsNext);
    this.props.setBlock(i, block);

    setTimeout(() => {
        this.checkWinner();
    }, 200);

    const status = `${block} selected block number: ${i}`;
    this.save(status);
}

save(status) {
    const url = "http://localhost:3001/api/saveData";
    Axios.post(url, {status})
    .then(result => {
        this.fetch();
    })
}

fetch() {
    const url = "http://localhost:3001/api/getData";
    Axios.get(url).then(result => {
        this.props.updateGameStatus(result.data);
        //this.checkWinner();
    });
}

getGameSatus() {
    return this.props.gameStatus.map(
        (status, key) => {
            if(status && status.length > 0) {
                return (<div key={key}><label>{status}</label><br/></div>)
            } else {
                return '';
            }
            
        }
    );
}

delete() {
    const url = "http://localhost:3001/api/deleteData";
    Axios.delete(url)
}

checkWinner() {
    console.log('Check winner called');
    const blocks = this.props.blocks;
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {           
            this.props.setGameOver(true);
            this.save('GAMEOVER!');
            this.delete();
            break;
        } 
      }
}

render() {
    
    let message = '';
    if (this.props.isGameOver) {
        message = 'Winner: ' + (this.props.xIsNext ? 'O' : 'X');  
    } else {
        message = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    };

    return (
        <div>
        <div className="game-board">
        <div>
            <div className="game-board-row">
            {this.renderBlock(0)}
            {this.renderBlock(1)}
            {this.renderBlock(2)}
            </div>
            <div className="game-board-row">
            {this.renderBlock(3)}
            {this.renderBlock(4)}
            {this.renderBlock(5)}
            </div>
            <div className="game-board-row">
            {this.renderBlock(6)}
            {this.renderBlock(7)}
            {this.renderBlock(8)}
            </div>
        </div> 
            
        </div>
        <div className="next-player">{message}</div>

        <div className="game-status">
            {this.getGameSatus()}
        </div>

        </div>
    );
}
}

const mapStateToProps = store => {
    return store;
}

export default connect(
    mapStateToProps,
    {setBlock, setNextPlayer, setGameOver, updateGameStatus}
) (Board)