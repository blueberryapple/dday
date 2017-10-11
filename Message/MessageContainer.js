import { connect } from 'react-redux';
import Message from './Message';

function stateToMessage({ price, rate, bonus, setbacks }) {
    return {
        price,
        rate,
        bonus,
        setbacks
    }
}

export default connect(stateToMessage)(Message);
