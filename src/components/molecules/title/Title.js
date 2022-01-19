import {
    View,
    Text,
  } from 'react-native';
import { styles } from './styles'
import React from 'react';

const Title = ({titulo}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{titulo}</Text>
        </View>
    );
}



export default Title;