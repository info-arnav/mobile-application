import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const numberPress = (e) => {setScreen(screen+e.target.innerText)}
  const [screen, setScreen] = useState("0")
  return (
    <View>
      <div style={{height:"100%", width:"100%"}}>
      <Text style={{fontSize:20, color:"white", backgroundColor:"black"}}>{parseInt(screen)}</Text>
      <div>
        <Button color="gray" title="+" style={{marginBottom:10}}></Button >
        <Button color="gray" title="-" style={{marginBottom:10}}></Button >
        <Button color="gray" title="/" style={{marginBottom:10}}></Button>
        <Button color="gray" title="*" style={{marginBottom:10}}></Button >
      </div>
      <div>
        <Button color="gray" onPress={numberPress} title="9"value="9"style={{marginBottom:10}}>9</Button >
        <Button color="gray" onPress={numberPress} title="8"value="8"style={{marginBottom:10}}>8</Button >
        <Button color="gray" onPress={numberPress} title="7"value="7"style={{marginBottom:10}}>7</Button >
        <Button color="gray" onPress={numberPress} title="6"value="6"style={{marginBottom:10}}>6</Button>
      </div>
      <div>
        <Button color="gray" onPress={numberPress} title="5"value="5"style={{marginBottom:10}}>5</Button >
        <Button color="gray" onPress={numberPress} title="4"value="4"style={{marginBottom:10}}>4</Button >
        <Button color="gray" onPress={numberPress} title="3"value="3"style={{marginBottom:10}}>3</Button >
        <Button color="gray" onPress={numberPress} title="2"value="2"style={{marginBottom:10}}>2</Button >
      </div>
      <div>
        <Button color="gray" onPress={numberPress} title="1"value="1"style={{marginBottom:10}}>1</Button >
        <Button color="gray" onPress={numberPress} title="0"value="0"style={{marginBottom:10}}>0</Button >
        <Button color="gray" title="C"style={{marginBottom:10}}></Button>
      </div>
      </div>
    </View>
  );
}