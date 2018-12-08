import React, { Component }       from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {};
export default class Screen2 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Screen 2 😎</Text>
        <Button title="Go to screen 1" onPress={() => this.props.navigation.navigate('Screen1')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
