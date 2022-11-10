import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = createStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.TabNavigator
        initialRouteName = "Home"
        screenOptions = {{
            HeaderShown:false
        }}>

            <Stack.Screen name = "Home" component={TabNavigator}/>
             <Stack.Screen name = "PostScreen" component = {TabNavigator}/>
        </Stack.TabNavigator>

    );
};
export default StackNavigator