import React, { Component } from 'react';
import { View } from 'react-native';

import { createAppContainer} from 'react-navigation' ;
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Fb from "./Screens/fb.js";
import In from "./Screens/in.js";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appcontainer />
      </View>
    )
  }
}

var switchContainer = createBottomTabNavigator({
  Fb:{ screen:Fb },
  In:{ screen:In } 
})
var  Appcontainer = createAppContainer(switchContainer)