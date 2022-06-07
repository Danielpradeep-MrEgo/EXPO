import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";
import { YellowBox } from 'react-native';


const Stack = createStackNavigator();

const globalScreenOptions = {
	headerStyle: { backgroundColor: "#2c6bed" },
	headerTitleStyle: { color: "white" },
	headerTintColor: "white",
};

export default function App() {
	// YellowBox.ignoreWarnings(['Setting a timer']);
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={globalScreenOptions}
			>
				<Stack.Screen
					// options={{ title: "Lets sign up" }}
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="AddChat" component={AddChatScreen} />
				<Stack.Screen name="Chat" component={ChatScreen} />
			</Stack.Navigator>
			{/* <View style={styles.container}>
				<Text>signal clone</Text>
				<StatusBar style="auto" />
			</View> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});