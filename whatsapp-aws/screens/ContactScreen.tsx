import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { View } from "../components/Themed";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";
import ContactListItem from "../components/ContactListItem";

export default function ContactScreen() {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		const fetchUsers = async () => {
			try {
				const userData = await API.graphql(graphqlOperation(listUsers));
				setUsers(userData.data.listUsers.item);
			} catch (e) {
				console.log(e);
			}
		};

		fetchUsers();
	}, []);

	console.log(users);
	return (
		<View style={styles.container}>
			<FlatList
				style={{ width: "100%" }}
				data={users}
				renderItem={({ item }) => <ContactListItem user={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
