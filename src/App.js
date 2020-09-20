import React from 'react';
import {ScrollView, View} from 'react-native';
import MatFlexBox from './pages/MatFlexBox';
import NotStylingData from './pages/NotStylingData';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import StylingExample from './pages/StylingExample';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingExample />
        <NotStylingData />
        <MatFlexBox /> */}
        {/* <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
