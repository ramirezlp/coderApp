import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Number from '../../components/atoms/number/Number';
import { styles } from './styles';
import { generateRandomNumber } from '../../utils/functions/index';
import { theme } from '../../utils/constants/theme';

const GameScreen = (props) => {
    const { userOption } = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0, 100, userOption));

    
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Suposición del oponente</Text>
            <Number number={currentGuess} />
            <View style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => { console.warn('MENOR') }} color={theme.primaryColor}/>
                <Button title="Mayor" onPress={() => { console.warn('MAYOR')}} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameScreen;