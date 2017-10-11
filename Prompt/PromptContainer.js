import { connect } from 'react-redux';
import Prompt from './Prompt';

function stateToPrompt({ fontLoaded }, { labels, handlers }) {
    return {
        fontLoaded,
        labels,
        handlers
    }
}

export default connect(stateToPrompt)(Prompt);
