import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import ChatListItem from "../components/ChatItems";
import EditScreenInfo from "../components/EditScreenInfo";
import NewMessage from "../components/NewMessageButton/NewMessage";
import { Text, View } from "../components/Themed";
import chatRooms from "../constants/data/ChatRooms";

export default function ChatScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				style={{ width: "100%" }}
				data={chatRooms}
				renderItem={({ item }) => <ChatListItem chatRoom={item} />}
				keyExtractor={(item) => item.id}
			/>
			<NewMessage />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
