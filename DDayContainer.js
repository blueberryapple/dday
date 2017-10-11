import { connect } from 'react-redux';
import DDay from './DDay';
import { font_loaded, save_input } from './actions';

function mapDispatchToProps(dispatch) {
    return {
        fontLoaded: () => dispatch(font_loaded()),
        addPrice: (val, name) => dispatch(save_input(val, name)),
        addRate: (val, name) => dispatch(save_input(val, name))
    };
}

export default connect(null, mapDispatchToProps)(DDay);
