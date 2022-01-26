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
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import GameStart from './src/screens/gamestart/GameStart';
import GameOverScreen from './src/screens/gameover/GameOverScreen';
import GameScreen from './src/screens/gamescreen/GameScreen'
import Header from './src/components/molecules/header/Header';

const App = () => {
  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  } 

  const handlerGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const handlerGameRestart = () => {
    setGuessRounds(0);
    setUserNumber('');
  }

  let content = userNumber && guessRounds <= 0 ?
    <GameScreen userOption={userNumber} onGameOver={handlerGameOver} /> :
    guessRounds > 0 ?
    <GameOverScreen choice={userNumber} rounds={guessRounds} onRestart={handlerGameRestart} /> : 
    <GameStart onStartGame={handlerStartGame} />;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.container}>
      <Header title="Adivina el número" />
        {content}
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.15,
  },
  confirmedtext: {
    fontSize: 16,
    color: '#212121',
    marginVertical: 10,
  },
});

export default App;
