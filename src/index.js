import './config/Reactotronconfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

const bgColor = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
         <Text>Alguma coisa</Text>
        </ScrollView>
      </View>
    );
  }
}
