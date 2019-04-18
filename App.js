
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import {createDrawerNavigator, createStackNavigator, createAppContainer,} from 'react-navigation';

import Screen1 from './pages/Screen1'
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
                source={require('./image/drawer.png')}
                style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
 
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'home screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'user screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'details screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'home screen',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'user screen',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'details screen',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);