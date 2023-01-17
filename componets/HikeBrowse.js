import React, { useState } from 'react';
import { View,ScrollView, Text ,Image ,StyleSheet, TextInput, Keyboard, Button, FlatList,TouchableOpacity} from 'react-native';
import Card from '../componets/Card';

import ReviewDetails from './ReviewDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const IMAGES = {
  Test1: require('../assets/forest.jpg'),
  Test2: require('../assets/new forest.jpg'),
};
const HikeBrowse = ({navigation, route}) => {

    const [reviews, setReviews] = useState([
        { title: 'medow valley hike', length: 5, body: 'lorem ipsum', key: '1',image:IMAGES.Test1 , description: 'SUCH A GOO DHIEK'},
        { title: 'mushroom trail', length: 4, body: 'lorem ipsum', key: '2', image:IMAGES.Test1 , description: 'SUCH A GOO DHIEK'},
        { title: 'poo poo point trail', length: 3, body: 'lorem ipsum', key: '3', image:IMAGES.Test2 , description: 'SUCH A GOO DHIEK'},
      ]);

      //const Stack = createStackNavigator();


    return (
        <View style={globalStyles.container}>
          <ScrollView horizontal={true} style={[styles.cont, {flexDirection: "row"},{height: 55}]}>
              <TouchableOpacity style={[styles.button,{backgroundColor: 'green'} ]}>
                <Text>Family </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]}>
                <Text>Day hike</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor: 'blue'}]}>
                <Text>Pack Bagging</Text>
              </TouchableOpacity>
          </ScrollView>
          <FlatList data={reviews} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Card>
                <Image  
                      style={styles.imageStyle}
                      source={item.image}/>
                <Text style={globalStyles.titleText}>{ item.title }</Text>
                <Text>Miles: {item.length}</Text>
                <Text style={globalStyles.paragraph}>{item.body}</Text>
              </Card>
            </TouchableOpacity>
          )} />
      </View>
        
        
    )
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 2,
      elevation: 3,
      width:100,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    tinyLogo: {
      width: 50,
      height: 50,

      },
      imageStyle: {
        height: 250,
        width: null,
        flex: 1,
        justifyContent: 'center'
      },
    theme: {
        flex: 1,
      backgroundColor: 'light grey',
      width: 100,
      height: 100,
      card: true
    },
    cardImageRadius: {
        

    },
    
});

const globalStyles = StyleSheet.create({
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
    }});

  export default HikeBrowse;