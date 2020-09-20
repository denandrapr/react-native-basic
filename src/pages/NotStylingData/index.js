import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const NotStylingData = () => {
  return (
    <View>
      <Text>Hellow</Text>
      <Coba />
      <Text>Mantap</Text>
      <Photo />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Coba = () => {
  return <Text>Denandra</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri:
          'https://asset.kompas.com/crops/2UjakURjSResZEoyWB9IyeFkGlU=/0x0:719x479/750x500/data/photo/2019/10/28/5db6b82dcae3c.png',
      }}
      style={{width: 200, height: 200}}
    />
  );
};

export default NotStylingData;
