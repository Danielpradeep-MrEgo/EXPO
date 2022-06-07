import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const NewMessage = () => {
	const navigation = useNavigation();

	const Press = () => {
		navigation.navigate("Contacts");
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={Press}>
				<MaterialCommunityIcons
					name="message-reply-text"
					size={28}
					color="white"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default NewMessage;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.light.tint,
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 20,
		right: 20,
	},
});
