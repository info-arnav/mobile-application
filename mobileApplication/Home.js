import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.nav}>
				<View
					style={{
						...styles.navContainer,
						width : '25%'
					}}
				>
					<Image
						source={{
							uri :
								'https://image.similarpng.com/very-thumbnail/2020/07/Instagram-black-and-white-logo-vector-png-(5).png'
						}}
						style={styles.icon}
					/>
					<Text style={styles.text}>Insta</Text>
				</View>
				<View style={styles.navContainer}>
					<Text style={styles.text}>Home</Text>
					<Text style={styles.text}>Signup</Text>
					<Text style={styles.text}>Login</Text>
				</View>
			</View>
			<Text style={styles.text}>
				Open up App.js to start working on your app!
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container    : {
		flex            : 1,
		backgroundColor : '#000',
		paddingTop      : 25
	},
	text         : {
		color : '#fff'
	},
	nav          : {
		backgroundColor : '#666',
		alignItems      : 'center',
		justifyContent  : 'space-around',
		flexDirection   : 'row',
		height          : 50,
		width           : '100%'
	},
	navContainer : {
		alignItems     : 'center',
		justifyContent : 'space-around',
		flexDirection  : 'row',
		width          : '50%'
	},
	icon         : {
		height : 37,
		width  : '12.5%'
	}
});

export default Home;
