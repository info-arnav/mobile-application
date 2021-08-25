import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const numberPress = (e) => {
    setScreen(screen+e.target.innerText)
  }
  const operations = (e) => {
    setNumber1(parseInt(screen))
    setOperation(e.target.innerText)
    setScreen("0")
  }
  const result = (e) => {
    if (operation == "+") {
      setNumber1(number1+parseInt(screen))
      setScreen(number1.toString())
    }else if (operation == "-") {
      setNumber1((number1-parseInt(screen)))
      setScreen(number1.toString())
    }else if (operation == "*") {
      setNumber1((number1*parseInt(screen)))
      setScreen(number1.toString())
    }else if (operation == "/") {
      setNumber1((number1/parseInt(screen)))
      setScreen(number1.toString())
    }
  }
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [operation, setOperation] = useState("+")
  const [screen, setScreen] = useState("0")
  return (
    <View>
      <div style={{height:"100%", width:"100%"}}>
      <Text style={{fontSize:20, color:"white", backgroundColor:"black",width:"100%"}}>{parseInt(screen)}</Text>
      <div>
        <Button color="black" onPress = {operations} title="+" style={{marginBottom:10}}>+</Button>
        <Button color="black" onPress = {operations} title="-" style={{marginBottom:10}}>-</Button>
        <Button color="black" onPress = {operations} title="/" style={{marginBottom:10}}>/</Button>
        <Button color="black" onPress = {operations} title="*" style={{marginBottom:10}}>*</Button>
      </div>
      <div>
        <Button color="gray" onPress={numberPress} title="9" style={{marginBottom:10}}>9</Button>
        <Button color="gray" onPress={numberPress} title="8"style={{marginBottom:10}}>8</Button>
        <Button color="gray" onPress={numberPress} title="7"style={{marginBottom:10}}>7</Button>
        <Button color="gray" onPress={numberPress} title="6"style={{marginBottom:10}}>6</Button>
      </div>
      <div>
        <Button color="gray" onPress={numberPress} title="5"style={{marginBottom:10}}>5</Button>
        <Button color="gray" onPress={numberPress} title="4"style={{marginBottom:10}}>4</Button>
        <Button color="gray" onPress={numberPress} title="3"style={{marginBottom:10}}>3</Button>
        <Button color="gray" onPress={numberPress} title="2"style={{marginBottom:10}}>2</Button>
      </div>
      <div>
        <Button color="gray" onPress={numberPress} title="1"style={{marginBottom:10}}>1</Button>
        <Button color="gray" onPress={numberPress} title="0"style={{marginBottom:10}}>0</Button>
        <Button color="gray" onPress={result} title="="style={{marginBottom:10}}>=</Button>
        <Button color="black"onPress = {()=>{setScreen("0")}}title="C"style={{marginBottom:10}}></Button>
      </div>
      </div>
    </View>
  );
}

