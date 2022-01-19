import React, { useState,useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../styles/styles';


function SubirFrutas({navigation}){
  const frutas =['Piña', 'Manzana','Melocoton', 'Uvas','Naranja','Kiwi','Platano','Pera'];

  const [fruit,setFruit]=useState(null);
  const [price, setPrice] = useState(null);

  const onPress = () => {
      fetch('http://10.0.2.2:8080/fruits', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": fruit,
          "price": price
        }),
      })
      .then((responseJson) => {
        console.log('getting data from fectch', responseJson);
        Alert.alert("Fruta añadida correctamente")
        setFruit(null);
        setPrice(null);
      })
      .catch(error => console.log(error));
  } 

  return(
    <View>
        <Text style={styles.c}>Añadir Frutas</Text>
        <Text>
          <Text style={styles.c}>Nombre de la Fruta</Text>
          <ModalDropdown style={styles.mdd}  options={frutas} onSelect={(id, fruit) => setFruit(fruit)}/>
        </Text>
        <Text style={styles.c}>
          <Text>Precio de la Fruta</Text>
        </Text>
          <TextInput  onChangeText={price => setPrice(price)}/> 
        <Text style={styles.c}>
          <TouchableOpacity  onPress={onPress}>
            <Text>Añadir</Text>
          </TouchableOpacity>
        </Text>
    </View>
  );
}

export default SubirFrutas;