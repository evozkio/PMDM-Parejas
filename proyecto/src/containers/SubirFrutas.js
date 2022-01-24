import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../styles/styles';


function SubirFrutas({navigation}){
  const frutas =['Piña', 'Manzana','Melocotón', 'Uvas','Naranja','Kiwi','Plátano','Pera'];

  const [fruit,setFruit]=useState(null);
  const [price, setPrice] = useState(null);

  const onPress = () => {
    console.log(fruit)
    console.log(price)
    if(isNaN(price)){
      console.log("estoy")
      Alert.alert("La fruta no se puede añadir")
    }else{
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
  }

  return(
    <View>
        <Text style={styles.titulos}>Añadir Frutas</Text>
        
            <Text style={styles.titulos}>Nombre de la Fruta</Text>
          
            <ModalDropdown style={styles.cajas} textStyle={styles.textoCaja}  
            dropdownStyle={styles.desplegable} options={frutas} 
            onSelect={(id, fruit) => setFruit(fruit)}/>
          
        <Text style={styles.titulos}>
          <Text style={styles.titulos}>Precio de la Fruta</Text>
        </Text>
        <TextInput style={styles.cajas} keyboardType = {'number-pad'} onChangeText={price => setPrice(price)}/> 
        <TouchableOpacity  style={styles.boton} onPress={onPress}>
          <Text style={styles.textoBoton} >Añadir</Text>
        </TouchableOpacity>
    </View>
  );
}

export default SubirFrutas;