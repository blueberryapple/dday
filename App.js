import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { Madoka } from 'react-native-textinput-effects';
import { Font } from 'expo';

const borderColor = '#67eaa2';
const inputStyle = { color: borderColor};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fontLoaded: false };
    }

    async componentDidMount() {
        // fixes default font arial error
        await Font.loadAsync({
            'Arial': require('./assets/fonts/Arial.ttf')
        }); 

        this.setState({ fontLoaded: true }); 
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                {this.state.fontLoaded && 
                    <Madoka
                        label={'Madoka'}
                        borderColor={borderColor}
                        inputStyle={inputStyle} />
                }
            </KeyboardAvoidingView>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'black',
    },
});
