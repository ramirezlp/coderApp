/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { components } from './src/utils/constants/components'
import { theme } from './src/utils/constants/theme'
import Header from './src/components/molecules/header/Header';
import Title from './src/components/molecules/title/Title';
import Card from './src/components/molecules/card/Card';
import Number from './src/components/atoms/number/Number';
import GameScreen from './src/screens/gamescreen/GameScreen'

const App = () => {
  
  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [startGame, setStartGame] = useState(false);

  const handleOnChange = (input) => {
      setNumber(input);
  }

  const handleOnClean = () => {
    setNumber('');
  }

  const handleOnConfirm = () => {
    const inputNumber = parseInt(number);
    if(inputNumber === NaN || inputNumber < 0 || inputNumber > 100) return;

    setConfirmed(true);
    setSelectedNumber(inputNumber)
    setNumber('');
  }

  const handleStartGame = () => {
    setStartGame(true);
  }

  const confirmedOutput = (confirmed) ? (<View style={styles.confirmedContainer}>
                                            <Text style={styles.confirmedOutput}>El numero elegido es</Text>
                                            <Number number={selectedNumber} />
                                            <Button color='#445555' onPress={() => handleStartGame()} title="Comenzar juego" />
                                         </View>) : null;

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header titulo="Adiviná el número" />
          <Title titulo="Comienza el juego"></Title>
          <Card 
            title="Elija un número"
            type={components.card.LIGHT}
            color={theme.primaryColor}
            handleOnChange={handleOnChange} 
            value={number} 
            autoFocus={true} 
            autoComplete='off' 
            keyboardType='numeric'
            handleOnClean={handleOnClean}
            handleOnConfirm={handleOnConfirm}
            />
            {confirmedOutput}
            <GameScreen />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  confirmedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.20
  },
  confirmedOutput: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#000',
  }
});

export default App;
