import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems, Dimensions, Image , AppSwitchNavigator, createAppContainer} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';



const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen},

});

/*const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const HomeDrawer = createDrawerNavigator({
  Home: HomeScreen,
});

HomeDrawer.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};




/*const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const LinksDrawer = createDrawerNavigator({
  Links: LinksScreen,
});

LinksDrawer.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};




/*const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};



const SettingsDrawer = createDrawerNavigator({
  Settings: SettingsScreen,
});

SettingsDrawer.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};




/*const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginScreen.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const LoginDrawer = createDrawerNavigator({
  Login: LoginScreen,
});

LoginScreen.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

/*export default createStackNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  LoginStack,
});

const CustomDrawerComponents = ( props ) => (
  <SafeAreaView style={{ flex:1}}>
  <View style={{ height:150,backgroundColor:'white', alignItems:'center', justifyContent:'center'} }>
    <Image source={ require('./components/img/icon.png') } style = {{ height: 120, width:120, borderRadius:60}}/>
  </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>

  </SafeAreaView>


)


const AppDrawerNavigator = createDrawerNavigator({
  HomeDrawer,
  LoginDrawer,
  SettingsDrawer,
  LinksDrawer,

},{
  contentComponent:CustomDrawerComponents
});

export default AppDrawerNavigator;

/*export default createDrawerNavigator({
  HomeDrawer,
  LinksDrawer,
  SettingsDrawer,
  LoginDrawer,
});*/

const AppContainer = createAppContainer(AppSwitchNavigator);


export default AppContainer;