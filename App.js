import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import * as Expo from 'expo';



export default class App extends React.Component{
  render(){
   return <AppNavigator/>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})