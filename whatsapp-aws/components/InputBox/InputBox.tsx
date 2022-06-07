import {
	Entypo,
	FontAwesome5,
	Fontisto,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { Input } from "react-native-elements";
import Colors from "../../constants/Colors";

const InputBox = () => {
	const [message, setMessage] = useState("");

	const onMicroPhonePress = () => {
        // console.warn(message: "MicroPhone")
    };

	const onSendPress = () => {
        // console.warn(message: `Sending ${message}`)
        setMessage("")

    };


	const onPress = () => {
		if (!message) {
			onMicroPhonePress();
		} else {
			onSendPress();
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<FontAwesome5 name="laugh-beam" size={24} color="grey" />
				{/* <Input /> */}
				<TextInput
					style={styles.textInput}
					multiline
					value={message}
					onChangeText={(text) => setMessage(text)}
				/>
				<Entypo name="attachment" size={24} color="grey" style={styles.icons} />
				{!message && (
					<Fontisto name="camera" size={24} color="grey" style={styles.icons} />
				)}
			</View>
			<View style={styles.buttonContainer}>
				{!message ? (
					<MaterialCommunityIcons name="microphone" size={28} color="white" onPress={onMicroPhonePress}/>
				) : (
					<MaterialIcons name="send" size={28} color="white" onPress={onSendPress}/>
				)}
			</View>
		</View>
	);
};

export default InputBox;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin: 10,
		alignItems: "flex-end",
	},
	mainContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 10,
		borderRadius: 50,
		marginRight: 10,
		flex: 1,
		alignItems: "flex-end",
	},
	buttonContainer: {
		backgroundColor: Colors.light.tint,
		borderRadius: 50,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	textInput: {
		flex: 1,
		marginHorizontal: 10,
	},
	icons: {
		marginHorizontal: 5,
	},
});
