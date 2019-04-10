export const SET_BLOCK = 'SET_BLOCK';
export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
export const SET_GAME_OVER = 'SET_GAME_OVER';

export function setBlock(index, block) {    //data={index:1,block:X}
    return {
        type: SET_BLOCK,
        index: index,
        block: block
    }
}

export function setNextPlayer(xIsNext) {
    return {
        type: SET_NEXT_PLAYER,
        xIsNext: xIsNext,
    }
}

export function setGameOver(isGameOver) {
    return {
        type: SET_GAME_OVER,
        isGameOver: isGameOver,
    }
}