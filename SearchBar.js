import React, { useState } from 'react';
import { View, TextInput, Button} from 'react-native';


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchButtonPress = () => {
    onSearch(searchTerm);
  }

  return (
    <View>
      <TextInput 
        placeholder="Enter search term"
        value={searchTerm}
        onChangeText={setSearchTerm}
        
      />
      <Button
        title="Search"
        onPress={onSearchButtonPress}
      />
    </View>
  );
}

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);



export default SearchBar;