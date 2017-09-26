// standard
import React from 'react';
import {
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    View
} from 'react-native';

// additional
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Font } from 'expo';
import {
    Madoka,
    Makiko
} from 'react-native-textinput-effects';

// constants
const lime = '#67eaa2';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            price: 0,
            rate: 1
        };
    }

    async componentDidMount() {
        // fixes default font arial error
        await Font.loadAsync({
            'Arial': require('./assets/fonts/Arial.ttf')
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        let { price, rate } = this.state;
        let daysLeft = Math.ceil(price / rate);

        const sharedStyling = {
            borderColor: lime,
            keyboardType: 'numeric',
            inputStyle: {
                color: lime
            },
        }

        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <Text style={styles.text}>D-Day Kdrama Clone</Text>
                <Text style={styles.result}>{daysLeft} Days</Text>
                <Text style={styles.body}>Enter the price and your daily earnings.</Text>

                {this.state.fontLoaded &&
                    <View>
                        <Madoka
                            {...sharedStyling}
                            label={'Price'}
                            onChangeText={(price) => this.setState({ price })} />

                        <Madoka
                            {...sharedStyling}
                            label={'Rate'}
                            onChangeText={(rate) => this.setState({ rate })} />
                    </View>
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
    }
});
