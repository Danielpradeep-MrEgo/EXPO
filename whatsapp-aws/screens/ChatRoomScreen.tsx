import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import chatRoomData from "../constants/data/Chats";
import ChatMessage from "../components/ChatMessage/ChatMessage";
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox/InputBox";

const ChatRoomScreen = () => {
	const route = useRoute();

	console.log(route.params);
	return (
		<ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
			<FlatList
				data={chatRoomData.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
				inverted
			/>
			<InputBox />
		</ImageBackground>
	);
};

export default ChatRoomScreen;
