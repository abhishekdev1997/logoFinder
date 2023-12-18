/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Screens from './src/screens';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Screens.Home.HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
});

export default App;
