import React, { useState } from 'react';
import { View ,StyleSheet, Text, Image, TextInput, Keyboard, Button, FlatList,TouchableOpacity} from 'react-native';
import Card from '../componets/Card';
import SearchBar from '../SearchBar';




const DataBase = ({navigation, route}) => {

    const [reviews, setReviews] = useState([
        { title: 'bobcat', length: 5, body: 'lorem ipsum', key: '1' },
        { title: 'doggy', length: 4, body: 'lorem ipsum', key: '2' },
        { title: 'car', length: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return (
        <View style={globalStyles.container}>
                <SearchBar></SearchBar>


        <FlatList data={reviews} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
            <View style={[styles.cont, {
                 // Try setting `flexDirection` to `"row"`.
                    flexDirection: "row"
                 }]}>
                <Image  
                    style={styles.imageStyle}
                    source={require('../assets/forest.jpg')}/>
            
            <View style={{ flex: 1 }}>
                <Text style={globalStyles.titleText}>{ item.title }</Text>
                <Text style={globalStyles.paragraph}>{item.body}</Text>
            </View>
              
              </View>
            </Card>
          </TouchableOpacity>
        )} />
      </View>
    )
  };
/*
<Image  
                    style={styles.imageStyle}
                    source={require('../assets/forest.jpg')}/>
              <Text style={globalStyles.titleText}>{ item.title }</Text>
              <Text>Miles: {item.length}</Text>
              <Text style={globalStyles.paragraph}>{item.body}</Text>
*/

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
  
    },

    imageStyle: {
        height: 110,
        width: 110,
        flex: 1,
        justifyContent: 'left'
      },
  });

  const globalStyles = StyleSheet.create({
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'left',
      marginLeft: 20
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
      marginLeft: 20
    },
    container: {
      flex: 1,
      padding: 20,
    }});

  export default DataBase;