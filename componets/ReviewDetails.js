import React from 'react';
import {View,ScrollView, Text ,Image ,StyleSheet, TextInput, Keyboard, Button, FlatList,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/Entypo";





function ReviewDetails({ route, navigation }) {
  const { title,body,length,image, description } = route.params;

    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 300}} style={styles.container}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <View style={styles.rect2}>
            <Text style={styles.loremIpsum}>
              A lovely quitet hike trhough the wildernes
            </Text>
          </View>
        </View>
        <View style={styles.rect}>
          <Text style={styles.medowValleyHike}>Medow Valley Hike</Text>
        </View>
        <View style={styles.iconRow}>
          <Icon name="direction" style={styles.icon}></Icon>
          <Image
            source={(image)}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.miles66}>Miles: 6.6</Text>
      </ScrollView>
    );
  }
/*
<ScrollView style = {globalStyles.container}>
      <Image style = {globalStyles.imageStyle}source={(image)}/>
      
      
      <View style={{height: 200, width:null,}}> 
      <Text style = {globalStyles.titleText}>
          {(title)}
      </Text>
        <Text style = {[globalStyles.paragraph,{color: 'green'} ]}> Miles: {(length)}</Text>
        <Text style={globalStyles.paragraph}>{(description)}</Text>
        
      </View>

      

    
    
    </ScrollView>
*/
const styles = StyleSheet.create({
  container: {
   
  },
  rect3: {
    left: 0,
    width: 327,
    height: 223,
    position: "absolute",
    backgroundColor: "rgba(157,153,153,1)",
    opacity: 0.77,
    top: 24
  },
  rect2: {
    top: 0,
    left: 0,
    width: 300,
    height: 223,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    marginLeft: 15,
    marginRight: 15
  },
  loremIpsum: {
    //fontFamily: "times new roman",
    color: "rgba(0,0,0,1)",
    height: 177,
    width: 285,
    fontSize: 19,
    marginTop: 24,
    marginLeft: 25
  },
  rect3Stack: {
    width: 346,
    height: 247,
    marginTop: 544,
    marginLeft: 15,
    marginRight: 15
  },
  rect: {
    width: 194,
    height: 113,
    backgroundColor: "#E6E6E6",
    marginTop: -393,
    marginLeft: 91

  },
  medowValleyHike: {
    //fontFamily: "roboto-700",
    color: "#121212",
    width: 181,
    height: 105,
    fontSize: 35,
    marginTop: 8,
    marginLeft: 12
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  image: {
    width: 388,
    height: 321,
    marginLeft: 71,
    marginTop: 11
  },
  iconRow: {
    height: 332,
    flexDirection: "row",
    marginTop: -448,
    marginLeft: -117,
    marginRight: -7
  },
  miles66: {
    //fontFamily: "roboto-500",
    color: "rgba(66,188,64,1)",
    height: 33,
    width: 288,
    fontSize: 20,
    marginTop: 116,
    marginLeft: 53
  }
});



export default ReviewDetails;