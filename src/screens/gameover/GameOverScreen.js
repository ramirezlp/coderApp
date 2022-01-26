import React from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';
import Number from '../../components/atoms/number/Number';
import { styles } from './styles';
import { theme } from '../../utils/constants/theme';

const gameOverImage = require('../../../assets/images/1000_F_375203802_FOVtD1IWxFxSRdPDlw7XtlcDJ145PV2V.jpeg');

const GameOverScreen = (props) => {
    const { rounds, choice, onRestart } = props;

    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait());
    }

    useEffect(() => {
        Dimensions.addEventListener('change', statePortrait);
        return () => {
            Dimensions.removeEventListener('change', statePortrait);
        }
    })

    return (
        <View style={styles.container}>
            <Image source={gameOverImage}
                    style={styles.image} />
            <Text style={styles.subtitle}>Suposición del oponente</Text>
            <Text style={styles.text}>Intentos: {choice}</Text>
            <Number number={choice} />
            <View style={styles.buttonContainer}>
                <Button title="Nuevo Juego" onPress={() => { onRestart && onRestart()}} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameOverScreen;