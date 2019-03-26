import React from 'react';

class Block extends React.Component {
    render() {
        return (
            <button className="game-block" 
            onClick={() => this.props.onClick()}>
            {this.props.value}
            </button>
        );
    }
}

export default Block;