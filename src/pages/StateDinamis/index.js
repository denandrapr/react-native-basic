import React, { useState } from 'react'
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
    const [number, setNumber] = useState(0)
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)}/>
    </View>
  );
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi state dinamis</Text>
      <Counter />
    </View>
  );
}

export default StateDinamis

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
})
