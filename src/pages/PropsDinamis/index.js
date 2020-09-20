import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 50, height: 50, borderRadius: 50}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.name}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal>
        <Story
          name="Denandra"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Boba"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Bbbobb"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Meeex"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Maxxx"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Maxxx"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Maxxx"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Maxxx"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          name="Maxxx"
          gambar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
