import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthContext = React.createContext();
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


export function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
        </View>
    );
}

export function Article() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
        </View>
    );
}
export default function HomeScreen() {
    //const { signOut } = React.useContext(AuthContext);
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: '#c6cbef',
                width: '45%',
            }}
        >
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}