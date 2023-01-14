import React from 'react';
import {View,ScrollView, Text ,Image ,StyleSheet, TextInput, Keyboard, Button, FlatList,TouchableOpacity} from 'react-native';

import Card from './Card';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function ReviewDetails({ route, navigation }) {
  const { title,body,length,image, description } = route.params;

  return (

    <ScrollView>
      <Image style = {globalStyles.imageStyle}source={(image)}/>
      <Text style = {globalStyles.titleText}>
          {(title)}
      </Text>

      <View styles={globalStyles.container}>
        <Text styles={globalStyles.paragraph}> Miles : {(length)}</Text>

        <Text styles={globalStyles.paragraph}>{(description)}</Text>

      </View>
    
    
    </ScrollView>

  )
    
};


const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 20,
  },
  imageStyle: {
    justifyContent: 'center',
    marginVertical: 8,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textDecorationLine: 'underline',
    alignSelf:'center',
  },
  paragraph: {
    marginVertical: 8,
    marginHorizontal: 10,
    lineHeight: 20,
    fontSize: 30
  },
 });


export default ReviewDetails;