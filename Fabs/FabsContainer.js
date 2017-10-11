import { connect } from 'react-redux';
import Fabs from './Fabs';
import { toggle_modal } from '../actions';

function dispatchToFab(dispatch) {
    return {
        toggleModal: (type) => dispatch(toggle_modal(type)),
    }
}
export default connect(null, dispatchToFab)(Fabs);
