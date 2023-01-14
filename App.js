
import { View, StyleSheet,Image, Text, TextInput, Keyboard, Button, FlatList,TouchableOpacity   } from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import DataBase from './componets/DataBase';
import HikeBrowse from './componets/HikeBrowse';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewDetails from './componets/ReviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  //list for directory
  const items = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4'},
  ];

 
  //const Tab = createBottomTabNavigator();
  /*
     
                options={{
                  title: "Animal lookup",
                tabBarIcon: ({ color, size }) => (
                  <Image  
                  style={styles.tinyLogo}
                  source={require('./assets/Animals.png')}/>
                ),
                tabBarColor:'beige'
              
              }} 
  */
  const Tab = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HikeBrowse">
        <Tab.Screen 
                name="HikeBrowse" 
                component={HikeBrowse} />
        <Tab.Screen 
                name="DataBase" 
                component={DataBase} 
            />
        <Tab.Screen name="ReviewDetails" component={ReviewDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  
    
      
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'olivedrab',
  },
  searchResults: {
    backgroundColor: '',
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 35,
  },
  HeaderText: 
  {
    fontSize:30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  searchBar:
  {
    fontSize: 16,
    padding: 4,
    borderBottomColor: "black",
    borderBottomWidth: 10//StyleSheet.hairlineWidth

  }
});




export default App;