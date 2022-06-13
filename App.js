import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';

import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <View style = {styles.rootScreen}>
      
      <SafeAreaView>{screen}</SafeAreaView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#2EE5AD'
  }
});
