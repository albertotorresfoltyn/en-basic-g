import * as React from 'react';
import AuthContext from './AppContext';
import { Button, Text, View } from 'react-native';
import data from './response.json'
import BigButton from './BigButton'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function ExcerciseList({list}) {
    debugger;
    return <>
        {list.map((e,i)=><Text key={i}>{e.name}</Text>)}        
    </>;
}

function ApparatusViewer(apparatus) {
    return  ()=><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ExcerciseList list={apparatus.excercises} />
        </View>
    
    
}

export default function HomeScreen() {
    const { signOut } = React.useContext(AuthContext);
    return (
        <>
            <Drawer.Navigator
                drawerStyle={{
                    width: '45%',
                }}
            >
                {data.map((apparatus, i) => {
                    return <Drawer.Screen key={i} name={apparatus.name} component={ApparatusViewer(apparatus)} />
                })}
            </Drawer.Navigator>
            <Button title="Sign out" onPress={signOut} />
        </>
    );
}