import { connect } from 'react-redux';
import ModalPrompt from './ModalPrompt';
import {
    save_input,
    toggle_modal,
    button_pressed
} from '../actions';

function stateToModalPrompt({ modal }) {
    return {
        modal
    }
}

function dispatchToModalPrompt(dispatch) {
    let name = 'def';
    let val = 0;

    let buttonPressed = (modalType) => {
        dispatch(button_pressed(val, name, modalType));
        dispatch(toggle_modal());
    };

    return {
        toggleModal: () => dispatch(toggle_modal()),
        addName: (input) => name = input,
        addVal: (input) => val = input,
        buttonPressed
    }
}

export default connect(stateToModalPrompt, dispatchToModalPrompt)(ModalPrompt);
