export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
	Contacts: undefined;
	ChatRoom: undefined;
};

export type MainTabParamList = {
	Camera: undefined;
	Chats: undefined;
	Status: undefined;
	Calls: undefined;
};

export type TabOneParamList = {
	TabOneScreen: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};

export type User = {
	id: string;
	name: string;
	imageUri: string;
	status: string;
};

export type Message = {
	id: string;
	content: string;
	createdAt: string;
};

export type ChatRoom = {
	id: string;
	// users: [User];
	users: User[];
	lastMessage: Message;
	// imageUri: string;
};
