import {SET_BLOCK, SET_NEXT_PLAYER, SET_GAME_OVER} from '../actions/action.js';

export default function reducer(state, action) {
    switch (action.type) {
        case SET_BLOCK: {            
            return Object.assign({}, state, {
                blocks: Object.assign([...state.blocks], 
                    {[action.index]: action.block}
                )}
            );
        }
        case SET_NEXT_PLAYER: {
            return Object.assign({}, state, {
                xIsNext: !action.xIsNext
            });
        }
        case SET_GAME_OVER: {
            return Object.assign({}, state, {
                isGameOver: action.isGameOver
            });
        }
        default: return state;
    }
}