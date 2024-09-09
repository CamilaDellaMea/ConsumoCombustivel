import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import ResultScreen from './src/screens/ResultScreen';  
import Home from './src/screens/Home';

const Stack = createStackNavigator();  

export default function App() {  
    return (  
        <NavigationContainer>  
            <Stack.Navigator initialRouteName="Home">  
                <Stack.Screen name="Tela Inicial" component={Home} />  
                <Stack.Screen name="Result" component={ResultScreen} />  
            </Stack.Navigator>  
        </NavigationContainer>  
    );  
}
