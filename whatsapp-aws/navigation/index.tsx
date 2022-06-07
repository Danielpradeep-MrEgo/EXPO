import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
	useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Image, View } from "react-native";
// import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import {
	Octicons,
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome5,
} from "@expo/vector-icons";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { color } from "react-native-reanimated";
import { ChatRoom } from "../constants/data/ChatRooms";
import Contacts from "../screens/ContactScreen";
import ContactScreen from "../screens/ContactScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

// export type RootNavigatorProps = {
// 	chatRoom: ChatRoom;
// };

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	const RootNavigatorProps = {
		chatRoom: ChatRoom,
	};
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator props={RootNavigatorProps} />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator({ props }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.light.tint,
					shadowOpacity: 0,
					elevation: 0,
				},
				headerTintColor: Colors.light.background,
				headerTitleAlign: "left",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="Root"
				component={MainTabNavigator}
				options={{
					title: "whatsapp",
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: 60,
								justifyContent: "space-between",
								marginRight: 10,
							}}
						>
							<Octicons name="search" size={22} color={"white"} />
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color={"white"}
							/>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="ChatRoom"
				component={ChatRoomScreen}
				// options={{ title: "chat Room" }}
				options={({ route }) => ({
					// title: route.params.id,
					title: route.params.name,
					// image: route.params.imageUri,
					// <Image source={route.params.imageUri}/>

					headerLeft: (props) => (
						<View>
							<Image
								style={{
									width: 35,
									height: 35,
									borderRadius: 50,
									marginLeft: 30,
								}}
								source={{
									uri:
										// "https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg",
										props.imageUri,
									// ChatRoom.user.imageUri
								}}
							/>
						</View>
					),
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: 100,
								justifyContent: "space-between",
								marginRight: 10,
							}}
						>
							<FontAwesome5 name="video" size={22} color="white" />
							<MaterialIcons name="call" size={22} color="white" />
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color={"white"}
							/>
						</View>
					),
				})}
			/>
			<Stack.Screen name="Contacts" component={ContactScreen} />
		</Stack.Navigator>
	);
}
