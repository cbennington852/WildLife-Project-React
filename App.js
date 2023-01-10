
import { View, StyleSheet, Text, TextInput, Keyboard, Button, FlatList,TouchableOpacity   } from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemList from './ItemList';

const App = () => {
  //list for directory
  const items = [
    { id: '1', title: 'Item 1',ItemDetails: '' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ];

  const Stack = createStackNavigator();

  return (
    
    <View style = {styles.container}>
      <View style = {styles.HeaderText}><Text style = {styles.HeaderText}>Animal Database Issaquah</Text></View>

      <View style = {styles.searchResults}>

      <ItemList items={items} />
      return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItemList" component={ItemList} initialParams={{ items }} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
      </View>
      
    </View>
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