import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { Madoka } from 'react-native-textinput-effects';
import styles from '../Styles';

export default function Message({ price, rate, bonus, setbacks }) {
    let num = price
    for (prop in bonus) {
        num -= bonus[prop];
    }
    for (prop in setbacks) {
        num += setbacks[prop];
    }

    let daysLeft = Math.ceil(Math.max(num, 0) / rate);

    return (
        <View>
            <Text style={styles.text}>D-Day Kdrama Clone</Text>
            <Text style={styles.result}>{daysLeft} Days</Text>
            <Text style={styles.body}>Enter the price and your daily earnings.</Text>
        </View>
    )
}
