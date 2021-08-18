import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [value, setValue] = useState("This is the initial content")
  return (
    <View style={styles.container}>
      <Text>This is my first mobile application</Text>

      <TextInput onChange = {()=>{setValue("This is the final content")}}
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
