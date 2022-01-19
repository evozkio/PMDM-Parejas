import React, { useState,useEffect } from 'react';
import { Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';



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
      <Text>Añadir Frutas</Text>
      <Text>Nombre de la Fruta</Text>
      <ModalDropdown options={frutas} onSelect={(id, fruit) => setFruit(fruit)}/>
      <Text>Precio de la Fruta</Text>
      <TextInput  onChangeText={price => setPrice(price)} /> 
      <TouchableOpacity  onPress={onPress}>
        <Text >Añadir</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubirFrutas;