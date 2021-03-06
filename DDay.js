import React from 'react';
import { KeyboardAvoidingView, Button, Modal, FlatList } from 'react-native';
import { Font } from 'expo';
import styles, {lime} from './Styles';
import FabsContainer from './Fabs/FabsContainer';
import ModalPromptContainer from './ModalPrompt/ModalPromptContainer';
import MessageContainer from './Message/MessageContainer';
import PromptContainer from './Prompt/PromptContainer';


export default class DDay extends React.Component {
    async componentDidMount() {
        // fixes default font arial error
        await Font.loadAsync({
            'Arial': require('./assets/fonts/Arial.ttf')
        });

        this.props.fontLoaded();
    }

    render() {
        let { addPrice, addRate, bonus, setbacks } = this.props;
        let summary = false;
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <MessageContainer />
                <PromptContainer
                    labels={['price', 'rate']}
                    handlers={[addPrice, addRate]} />

                <ModalPromptContainer />
                <FabsContainer />
            </KeyboardAvoidingView>
       );
    }
}
