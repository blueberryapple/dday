import { StyleSheet } from 'react-native';

// constants
export const lime = '#67eaa2';
export const red = '#c93634';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 24,
        color: lime
    },
    body: {
        fontSize: 12,
        color: lime
    },
    result: {
        fontSize: 40,
        color: 'white',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});
