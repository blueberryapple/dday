import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles, { lime, red } from '../Styles';

export default function Fabs({ toggleModal }) {
    const orange = 'rgba(231,76,60,1)';
    
    return (
        <ActionButton buttonColor={orange}>
            <ActionButton.Item buttonColor={lime} title='extra income'>
                <Icon
                    name='attach-money'
                    style={styles.actionButtonIcon}
                    onPress={() => toggleModal('bonus')} />
            </ActionButton.Item>

            <ActionButton.Item buttonColor={red} title='setbacks'>
                <Icon
                    name='money-off'
                    style={styles.actionButtonIcon}
                    onPress={() => toggleModal('setbacks')} />
            </ActionButton.Item>
        </ActionButton>
    )
}
