import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function Fruta({ route }) {

const styles = StyleSheet.create({

name: {
  fontWeight: 'bold',
  color: 'black'
},

price: {
  color: 'red'
}

})

const [fruits, setFruits] = useState(null);

  useEffect(() => {
    fetch("http://10.0.2.2:8080/fruits")
    .then(response => response.json())
    .then((responseJson) => {
      console.log('getting data from fetch', responseJson);
      setFruits(responseJson);
    })
    .catch(error => console.log(error));
  }, [])

  const renderItem = ({ item }) => (
    <Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text> </Text>
      <Text style={styles.price}>{item.price}</Text>

    </Text>
  );

    return (
      <View>
        <FlatList 
          data={fruits}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
        />
      </View>
    );

  }


