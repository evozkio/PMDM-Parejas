import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FrutasMostrar from './src/containers/FrutasMostrar';
import SubirFrutas from './src/containers/SubirFrutas';

const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'SubirFrutas') {
              iconName = focused ? 'ios-information-circlq' : 'ioq-informatioq-circle-outline';
            } else if (route.name === 'FrutasMostrar') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarStyle: {
            backgroundColor: 'aqua'
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
        })}
      >

        <Tab.Screen name="FrutasMostrar" component={FrutasMostrar}
          options={{
            title: 'Frutas',
           headerStyle: {
              backgroundColor: 'aqua',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
         <Tab.Screen name="SubirFrutas" component={SubirFrutas}
          options={{
            title: 'AñadirFrutas',
           headerStyle: {
              backgroundColor: 'aqua',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />

      </Tab.Navigator>
    </NavigationContainer>


  )
}

export default App;

