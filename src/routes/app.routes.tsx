import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Dashboard from '../pages/DashBoard';
const Stack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default AppRoutes;