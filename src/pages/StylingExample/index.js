/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import sjn from './../../assets/images/sjn.png';

const StylingExample = () => {
  return (
    <View>
      <View style={styles.viewBackground}>
        <Image
          source={sjn}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
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
    flex: 1,
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
    fontSize: 12,
  },
});

export default StylingExample;
