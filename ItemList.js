import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

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

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

const ItemList = ({ items, onSearch }) => {
    const [filteredItems, setFilteredItems] = useState(items);
    const navigation = useNavigation();
  
    const handleSearch = (searchTerm) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const newFilteredItems = items.filter((item) => item.title.toLowerCase().includes(lowerCaseSearchTerm));
      setFilteredItems(newFilteredItems);
    }
  
    const handleItemPress = (item) => {
      navigation.navigate('ItemDetails', { item });
    }
  
    return (
      <View>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          data={filteredItems}
          renderItem={({ item }) => <Item title={item.title} onPress={() => handleItemPress(item)} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
  

export default ItemList;