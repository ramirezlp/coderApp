import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../components/molecules/header/Header';
import Title from '../../components/molecules/title/Title';
import Card from '../../components/molecules/card/Card';
import Number from '../../components/atoms/number/Number';
import { styles } from './styles'
import { components } from '../../utils/constants/components'
import { theme } from '../../utils/constants/theme'

const GameStart = ({onStartGame}) => {
  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [startGame, setStartGame] = useState(false);

  const handleOnChange = input => {
    setNumber(input);
  };

  const handleOnClean = () => {
    setNumber('');
  };

  const handleOnConfirm = () => {
    const inputNumber = parseInt(number);
    if (inputNumber === NaN || inputNumber < 0 || inputNumber > 100) return;

    setConfirmed(true);
    setSelectedNumber(inputNumber);
    setNumber('');
  };

  const handleStartGame = () => {
    onStartGame(selectedNumber)
    setStartGame(true);
  };

  const confirmedOutput = confirmed ? (
    <View style={styles.confirmedContainer}>
      <Text style={styles.confirmedOutput}>El numero elegido es</Text>
      <Number number={selectedNumber} />
      <Button
        color="#445555"
        onPress={() => handleStartGame()}
        title="Comenzar juego"
      />
    </View>
  ) : null;

  return (
    <View style={styles.container}>
      <Title titulo="Comienza el juego"></Title>
      <Card
        title="Elija un número"
        type={components.card.LIGHT}
        color={theme.primaryColor}
        handleOnChange={handleOnChange}
        value={number}
        autoFocus={true}
        autoComplete="off"
        keyboardType="numeric"
        handleOnClean={handleOnClean}
        handleOnConfirm={handleOnConfirm}
      />
      {confirmedOutput}
    </View>
  );
};

export default GameStart;
