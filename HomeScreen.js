import * as React from 'react';
import AuthContext from './AppContext';
import { Button, Text, View } from 'react-native';
import data from './response.json'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


export function ApparatusViewer(apparatus) {
    return (()=>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{apparatus.name}</Text>
        </View>
    );
}

export default function HomeScreen() {
    debugger;
    const { signOut } = React.useContext(AuthContext);

    return (
        <>
        <Drawer.Navigator
            drawerStyle={{
                /*backgroundColor: '#c6cbef',*/
                width: '45%',
            }}
        >
            {data.map(apparatus=>{
                return <Drawer.Screen name={apparatus.name} component={ApparatusViewer(apparatus)} />
            })}
        </Drawer.Navigator>
        <Button title="Sign out" onPress={signOut} />
            </>
    );
}