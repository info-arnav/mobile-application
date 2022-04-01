import React, { useState } from 'react';
import { TextInput, button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const numberPress = (e) => {
    setScreen(screen + e.target.innerText);
  };
  const operations = (e) => {
    setNumber1(parseInt(screen));
    setOperation(e.target.innerText);
    setScreen('0');
  };
  const result = (e) => {
    if (operation == '+') {
      setNumber1(number1 + parseInt(screen));
      setScreen(number1 + parseInt(screen));
    } else if (operation == '-') {
      setNumber1(number1 - parseInt(screen));
      setScreen(number1 - parseInt(screen));
    } else if (operation == '×') {
      setScreen(number1 * parseInt(screen));
    } else if (operation == '÷') {
      setNumber1(number1 / parseInt(screen));
      setScreen(number1 / parseInt(screen));
    }
  };
  const [number1, setNumber1] = useState(0);
  const [operation, setOperation] = useState('');
  const [screen, setScreen] = useState('0');
  return (
    <div>
      <div style={{ height: '100%', width: '100%' }}>
        <div
          style={{
            fontSize: 20,
            color: 'black',
            backgroundColor: 'white',
            width: '100%',
          }}>
          {parseInt(screen)}
        </div>
        <div>
          <button
            color="#ADFF2F"
           onClick={operations}
            title="+"
            style={{ marginBottom: 10 }}>
            +
          </button>
          <button
            color="#ADFF2F"
           onClick={operations}
            title="-"
            style={{ marginBottom: 10 }}>
            -
          </button>
          <button
            color="#ADFF2F"
           onClick={operations}
            title="÷"
            style={{ marginBottom: 10 }}>
            ÷
          </button>
          <button
            color="#ADFF2F"
           onClick={operations}
            title="×"
            style={{ marginBottom: 10 }}>
            ×
          </button>
        </div>
        <div>
          <button
            color="black"
           onClick={numberPress}
            title="9"
            style={{ marginBottom: 10 }}>
            9
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="8"
            style={{ marginBottom: 10 }}>
            8
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="7"
            style={{ marginBottom: 10 }}>
            7
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="6"
            style={{ marginBottom: 10 }}>
            6
          </button>
        </div>
        <div>
          <button
            color="black"
           onClick={numberPress}
            title="5"
            style={{ marginBottom: 10 }}>
            5
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="4"
            style={{ marginBottom: 10 }}>
            4
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="3"
            style={{ marginBottom: 10 }}>
            3
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="2"
            style={{ marginBottom: 10 }}>
            2
          </button>
        </div>
        <div>
          <button
            color="black"
           onClick={numberPress}
            title="1"
            style={{ marginBottom: 10 }}>
            1
          </button>
          <button
            color="black"
           onClick={numberPress}
            title="0"
            style={{ marginBottom: 10 }}>
            0
          </button>
          <button
            color="gold"
           onClick={result}
            title="="
            style={{ marginBottom: 10 }}>
            =
          </button>
          <button
            color="#00BFFF"
           onClick={() => {
              setScreen('0');
            }}
            title="C"
            style={{ marginBottom: 10 }}></button>
        </div>
      </div>
    </div>
  );
}
