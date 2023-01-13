import React, { useState } from 'react';
import { View,ScrollView, Text ,Image ,StyleSheet, TextInput, Keyboard, Button, FlatList,TouchableOpacity} from 'react-native';
import Card from '../componets/Card';

/*
<Card
                flex
                borderless
                style={styles.card}
                title="Christopher Moon"
                caption="139 minutes ago"
                location="Los Angeles, CA"
                image='../assets/forest.jpg'
            />
*/

const HikeBrowse = ({navigation, route}) => {

    const [reviews, setReviews] = useState([
        { title: 'medow valley hike', length: 5, body: 'lorem ipsum', key: '1' },
        { title: 'mushroom trail', length: 4, body: 'lorem ipsum', key: '2' },
        { title: 'poo poo point trail', length: 3, body: 'lorem ipsum', key: '3' },
      ]);




    return (
        <View style={globalStyles.container}>
          <ScrollView style={[styles.cont, {flexDirection: "row"},{height: 55},{horizontal: true}]}>
              
              <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]}>
                <Text>Family Freindly</Text>
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
                      source={require('../assets/forest.jpg')}/>
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
      backgroundColor: 'black',
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