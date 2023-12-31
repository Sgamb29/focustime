import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { colors } from "./src/utils/colors"
import { Focus } from './src/features/Focus'
import React, { useState } from 'react';
import { Timer } from './src/components/Timer'
import { FocusHistory } from './src/features/FocusHistory';



export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
      <>
        <Focus addSubject={setCurrentSubject} /> 
        <FocusHistory history={history}/>
      </>
        ): (<Timer 
                focusSubject={currentSubject} 
                onTimerEnd={(subject) => {
                  setHistory([...history, subject])
                }}
                clearSubject={() => setCurrentSubject(null)}
                />
                )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.blueGreen,

  },
});
