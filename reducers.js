import { combineReducers } from 'redux';
import {
    TOGGLE_MODAL,
    SAVE_INPUT,
    FONT_LOADED,
    BUTTON_PRESSED
} from './actions';

/* example state
{
    fontLoaded: true,
    price: 900,
    rate: 60,
    bonus: {
        ot: 40,
        birthday: 200
    },
    setbacks: {
        ticket: 250
    },
    modal: {
        open: false,
        modalType: 'bonus'
    }
}
*/

function buttonPressedGen(name) {
    return (state={}, action) => {
        switch (action.type) {
            case BUTTON_PRESSED:
                if (action.modalType === name){
                    console.log(action.val)
                    return { ...state, [action.name]: action.val }
                }
            default:
                return state;
        }
    }
}
let bonus = buttonPressedGen('bonus');
let setbacks = buttonPressedGen('setbacks');

function saveInputGen(name, defState) {
    return (state=defState, action) => {
        switch (action.type) {
            case SAVE_INPUT:
                console.log(action.val)
                return action.name === name
                    ? action.val
                    : state
            default:
                return state;
        }
    }
}
let price = saveInputGen('price', 0);
let rate = saveInputGen('rate', 1);

function fontLoaded(state=false, action) {
    switch (action.type) {
        case FONT_LOADED:
            return true;
        default:
            return state;
    }
}

initialModalState = {
    open: false,
    modalType: ''
}
function modal(state=initialModalState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                open: !state.open,
                modalType: action.modalType
            };

        default:
            return state;
    }
}

export default combineReducers({
    fontLoaded,
    price,
    rate,
    bonus,
    setbacks,
    modal,
});
