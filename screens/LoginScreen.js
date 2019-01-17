import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';




export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>TESTE</Text>
      </ScrollView>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
