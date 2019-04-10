import React from 'react';
import Block from './Block.js';
import { connect } from 'react-redux';
import { setBlock, setNextPlayer, setGameOver } from '../actions/action';

class Board extends React.Component {
constructor(props) {
    super(props);

    // this.state = {
    //     blocks: Array(9).fill(null),
    //     // xIsNext: true,
    //     // gameOver: false,
    // };
}

renderBlock(i) {
    return (
        <Block 
        //value={this.state.blocks[i]}
        value={this.props.blocks[i]}
        onClick={() => this.handleClick(i)}
        />
    )
}

handleClick(i) {
    //const blocks = this.props.blocks.slice();
    
    if(this.props.blocks[i] || this.props.isGameOver) {
        return;
    }
    let block = this.props.xIsNext ? 'X' : 'O';
    
    

    this.checkWinner();

    if(!this.props.isGameOver) {
        this.props.setNextPlayer(this.props.xIsNext);
        this.props.setBlock(i, block);
        // this.setState(
        //     {
        //         blocks: blocks,
        //         xIsNext: !this.state.xIsNext,
        //     }
        // );

    }
    
}

checkWinner() {
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
            // this.setState(
            // {
            //     gameOver: true,
            // }
            // );
            this.props.setGameOver(true);
            return;
        } 
      }
}

render() {
    let message = '';
    //if (this.state.gameOver) {
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
        </div>
    );
}
}

const mapStateToProps = store => {
    //console.log(store);
    //state = state;
    return store;
}

//export default Board;
export default connect(
    mapStateToProps,
    {setBlock, setNextPlayer, setGameOver}
) (Board)