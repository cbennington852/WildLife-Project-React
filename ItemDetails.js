import React from 'react';
import { View, Text } from 'react-native';

const ItemDetails = ({ route }) => {
    const { item } = route.params || {};
    if (!item) {
      return <Text>No item selected</Text>
    }

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ItemDetails;