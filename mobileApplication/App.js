import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {useState} from "react"
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(()=>{}, [value])
  const [value, setValue] = useState("0")
  const [value1, setValue1] = useState("0")
  return (
    <View>
      <Text style={{fontSize : "50px", fontWeight:"bold"}}>This is my first applications</Text>
      <Text style={{fontSize : "50px"}}>This is my first applications</Text>
       {
      //() => {} this means a function
      // use // for comments
      }
      <TextInput onChange={(e)=>{setValue(e.target.value)}}
        style={{height: 40}}
        placeholder="Type here to translate!"
        
      /><TextInput onChange={(e)=>{setValue1(e.target.value)}}
      style={{height: 40}}
      placeholder="Type here to translate!"
      
    />
    <Text>{value}</Text>
      <Text>{value1}</Text>
      <Text>{parseInt(value) + parseInt(value1)}</Text> 
    </View>
  );
}

