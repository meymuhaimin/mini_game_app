import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber<= 0 || chosenNumber >99){
            Alert.alert(
                'Invalid number', 
                'Mumber has to be a number between 1 to 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return ( 
    <View style = {styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value = {enteredNumber}
        />
        <View style = {styles.buttonsContainer}>
            <View style = {styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            
            <View style = {styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25

    },

    numberInput: { 
        height: 50,
        width: 90,
        fontSize: 32,
        borderBottomColor: '#23ECAC',
        borderBottomWidth: 2,
        color: '#23ECAC',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});