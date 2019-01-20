
import { createDrawerNavigator } from 'react-navigation';

import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';


const navigator = createDrawerNavigator(
  {
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,
    HomeScreen: HomeScreen,
  }
  
);

export default navigator;