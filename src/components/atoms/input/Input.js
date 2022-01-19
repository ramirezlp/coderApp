import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";


const Input = ({onChangeText, ...props}) => {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(value) => onChangeText(value)} style={styles.input} {...props} />
        </View>
    )
}

export default Input;