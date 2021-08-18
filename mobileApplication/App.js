import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput
} from 'react-native';
import Home from './Home';

export default function App() {
	const [
		val,
		setVal
	] = useState(0);
	const [
		val2,
		setVal2
	] = useState(0);
	return (
		<View style={styles.container}>
			<TextInput
				style={{ height: 40 }}
				onChangeText={num =>
					setVal(parseInt(num) || 0)}
				defaultValue={'Enter a number'}
			/>
			<TextInput
				style={{ height: 40 }}
				onChangeText={num =>
					setVal2(parseInt(num) || 0)}
				defaultValue={'Enter a number'}
			/>
			<Text>{val}</Text>
			<Text>{val2}</Text>
			<Text>{val + val2}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff',
		padding         : 25
	}
});
