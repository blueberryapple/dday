import React from 'react';
import { View } from 'react-native';
import { Madoka } from 'react-native-textinput-effects';
import styles, { lime } from '../Styles';

export default function Prompt({ fontLoaded, labels, handlers }) {
    const sharedStyling = {
        borderColor: lime,
        keyboardType: 'numeric',
        inputStyle: {
            color: lime
        },
    };

    return (
        <View>
            {fontLoaded &&
                labels.map((element, i) => {
                    return (
                        <Madoka
                            {...sharedStyling}
                            label={element}
                            onChange={(event) => handlers[i](Number(event.nativeEvent.text), element)}
                            key={element} />
                    )
                })
            }
        </View>
    )
}
