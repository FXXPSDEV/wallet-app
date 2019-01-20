import React,{ Component} from "react";
import { 
  View,
  Text,
  StyleSheet, 
  Button,
} from "react-native";



class LoginScreen extends Component{

   signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behaviour: 'web',
        androidClientId: 515118838508-mqkj98g3j7neghob66nmeuu7ikvev2nv.apps.googleusercontent.com,
        //iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }



  render(){
    <View style={styles.container}>
    <Button title="Sign in With Google" onPress={()=> signInWithGoogleAsync() }></Button>
  </View>
  }
}



export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});