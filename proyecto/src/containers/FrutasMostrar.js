import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

function FrutasMostrar({ navigation }) {

    const styles = StyleSheet.create({

        name: {
          fontWeight: 'bold',
          color: 'black'
        },
        
        price: {
          color: 'red'
        },
        
        imagen: {
          height: 80, width: 80
        },
        
        centro: {
          textAlign:'center'
        },
        
        largo: {
          flexDirection:'row',
          textAlign: 'center'
        } 
        
        })
        
        function imagenFruta(item) {
          if('Piña'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Piña.png')}/>
          else if ('Manzana'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Manzana.png')}/>
          else if ('Melocotón'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Melocoton.jpg')}/>
          else if ('Uvas'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Uvas.png')}/>
          else if ('Naranja'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Naranja.jpg')}/>
          else if ('Kiwi'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Kiwi.jpg')}/>
          else if ('Plátano'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Platano.jpg')}/>
          else if ('Pera'===item.name)
            return <Image style={styles.imagen} source={require('./src/assets/Pera.jpg')}/>
          }
        
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
            <View>
              <Text style={styles.centro}>
                {imagenFruta(item)}
                <Text style={styles.name}>{item.name}</Text>
                <Text> </Text>
                <Text style={styles.price}>{item.price}</Text>
              </Text>
              <Text style={styles.largo}>
                <Text>____________________________________________________________</Text>
              </Text>
            </View>
          );
        
            return (
              <View>
                <FlatList 
                  data={fruits}
                  renderItem={(renderItem)}
                  keyExtractor={item=>item.id}
                />
              </View>
            );

}

export default FrutasMostrar
