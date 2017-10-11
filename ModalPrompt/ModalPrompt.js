import React from 'react';
import {
    Modal,
    View,
    Button,
} from 'react-native';

import styles from '../Styles';
import PromptContainer from '../Prompt/PromptContainer';

export default function ModalPrompt({ toggleModal, buttonPressed, addName, addVal, modal }) {
    return (
        <Modal
            transparent={true}
            onRequestClose={toggleModal}
            visible={modal.open}>
            <View style={styles.container}>
                <PromptContainer
                    labels={['Name', 'Value']}
                    handlers={[addName, addVal]} />
                <Button
                    title='Done'
                    onPress={() => buttonPressed(modal.modalType)} />
            </View>
        </Modal>
    )
}
