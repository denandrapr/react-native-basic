import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import sjn from './sjn.png';

const App = () => {
  return <StylingExample />;
};

const StylingExample = () => {
  return (
    <View>
      <View>
        <Text style={styles.text}>Styling AAAAAAAAAAAAAA</Text>
      </View>
      <View style={styles.viewBackground}>
        <Image source={sjn} style={{width: 188, height: 107, borderRadius: 8}} />
        <Text style={styles.textTitleCard}>Keluarga JDG</Text>
        <Text style={styles.textSubtitleCard}>Yuk join bersama kami</Text>
        <View style={styles.buttonJoin}>
          <Text style={styles.textJoin}>Join</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewBackground: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  textTitleCard: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  textSubtitleCard: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 8,
  },
  buttonJoin: {
    backgroundColor: '#6FCF97',
    marginTop: 16,
    paddingVertical: 6,
    borderRadius: 25,
  },
  textJoin: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 12
  }
});

const Data = () => {
  return (
    <View>
      <Text>Hellow</Text>
      <Coba />
      <Text>Mantap</Text>
      {/* <Photo /> */}
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Coba = () => {
  return <Text>Denandra</Text>;
};

// const Photo = () => {
//   return <Image source={{uri : 'https://asset.kompas.com/crops/2UjakURjSResZEoyWB9IyeFkGlU=/0x0:719x479/750x500/data/photo/2019/10/28/5db6b82dcae3c.png'}} style={{width: 200, height: 200}}/>;
// };

export default App;