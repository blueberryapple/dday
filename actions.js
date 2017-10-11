export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SAVE_INPUT = 'SAVE_INPUT';
export const FONT_LOADED = 'FONT_LOADED';
export const BUTTON_PRESSED = 'BUTTON_PRESSED';

function toggle_modal(modalType='') {
    return {
        type: TOGGLE_MODAL,
        modalType
    };
}

function save_input(val, name) {
    return {
        type: SAVE_INPUT,
        val,
        name
    };
}

function button_pressed(val, name, modalType) {
    return {
        type: BUTTON_PRESSED,
        val,
        name,
        modalType
    }
}

function font_loaded() {
    return {
        type: FONT_LOADED
    };
}

export { toggle_modal, save_input, button_pressed, font_loaded };
