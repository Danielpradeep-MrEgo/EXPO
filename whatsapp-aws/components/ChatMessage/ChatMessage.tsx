import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { Message } from "../../types";

export type ChatMessageProps = {
	messages: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
	const { message } = props;

	const isMyMessage = () => {
		return message.user.id === "u1";
	};
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.messageBox,
					{
						backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
						marginLeft: isMyMessage() ? 50 : 0,
						marginRight: isMyMessage() ? 0 : 50,
					},
				]}
			>
				<Text style={styles.name}>{!isMyMessage() && message.user.name}</Text>
				<Text>{message.content}</Text>
				<Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
			</View>
		</View>
	);
};

export default ChatMessage;

const styles = StyleSheet.create({
	container: { padding: 10 },
	messageBox: {
		borderRadius: 10,
		padding: 10,
	},
	name: { color: Colors.light.tint, fontWeight: "bold", marginBottom: 5 },
	time: { alignSelf: "flex-end", color: "gray" },
});
