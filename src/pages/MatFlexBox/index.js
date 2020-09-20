/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';

class MatFlexBox extends Component {
  render() {
    return (
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
            <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}/>
            <View style={{backgroundColor: '#feca57', width: 50, height: 50}}/>
            <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}/>
            <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}/>
        </View>
    );
  }
}

export default MatFlexBox;
