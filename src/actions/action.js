export const SET_BLOCK = 'SET_BLOCK';
export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
export const SET_GAME_OVER = 'SET_GAME_OVER';

export function setBlock(data) {
    return {
        type: SET_BLOCK,
        data,
    }
}

export function setNextPlayer(data) {
    return {
        type: SET_NEXT_PLAYER,
        data,
    }
}

export function setGameOver(data) {
    return {
        type: SET_GAME_OVER,
        data,
    }
}