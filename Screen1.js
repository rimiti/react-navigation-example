import React, { Component }       from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {};
export default class Screen1 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen 1 😎</Text>
        <Button title="Go to screen 2" onPress={() => this.props.navigation.navigate('Screen2')} />
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
