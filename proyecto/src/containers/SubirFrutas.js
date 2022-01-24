import React, { useState,useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../styles/styles';


function SubirFrutas({navigation}){
  const frutas =['Piña', 'Manzana','Melocotón', 'Uvas','Naranja','Kiwi','Plátano','Pera'];

  const [fruit,setFruit]=useState(null);
  const [price, setPrice] = useState(null);

  const onPress = () => {
    if(isNaN(price))
      {SubirFruta}
    else
      {
        Alert.alert("Fruta la fruta no se puede añadir")
      }
  }

  const SubirFruta = () => {
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
        
            <Text style={styles.c}>Nombre de la Fruta</Text>
          
            <ModalDropdown style={styles.mdd2} textStyle={styles.c2}  
            dropdownStyle={styles.desplegable} options={frutas} 
            onSelect={(id, fruit) => setFruit(fruit)}/>
          
        <Text style={styles.c}>
          <Text style={styles.c}>Precio de la Fruta</Text>
        </Text>
        <TextInput style={styles.mdd2} keyboardType = {'number-pad'} onChangeText={price => setPrice(price)}/> 
        <TouchableOpacity  style={styles.boton} onPress={onPress}>
          <Text style={styles.c3} >Añadir</Text>
        </TouchableOpacity>
    </View>
  );
}

export default SubirFrutas;