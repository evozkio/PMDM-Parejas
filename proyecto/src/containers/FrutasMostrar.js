import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, RefreshControl } from "react-native";
import styles from '../styles/styles';

function FrutasMostrar() {
        
        function imagenFruta(item) {
          if('Piña'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Piña.png')}/>
          else if ('Manzana'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Manzana.png')}/>
          else if ('Melocotón'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Melocoton.jpg')}/>
          else if ('Uvas'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Uvas.png')}/>
          else if ('Naranja'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Naranja.jpg')}/>
          else if ('Kiwi'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Kiwi.jpg')}/>
          else if ('Plátano'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Platano.jpg')}/>
          else if ('Pera'===item.name)
            return <Image style={styles.imagen} source={require('../assets/Pera.jpg')}/>
          }
        
        const [fruits, setFruits] = useState(null);
        const [refrehing, setRefreshing] = useState(false);
        const [loading, setLoading] = useState(true);

        const wait = (timeout) => {
          return new Promise(resolve => {
            setTimeout(resolve, timeout);
          })
        }

        const onRefresh = React.useCallback(() => {
          setRefreshing(true);
          wait(2000).then(() => setRefreshing(false), getFruits());
        }, []);
      
        function getFruits() {
          fetch("http://10.0.2.2:8080/fruits")
            .then(response => response.json())
            .then((responseJson) => {
              console.log('getting data from fectch', responseJson);
              setFruits(responseJson);
              setLoading(false);
            })
            .catch(error => console.log(error))
        }
      
        useEffect(() => {
          getFruits();
        }, [])
        
          const renderItem = ({ item }) => (
            <View style={styles.centro}>
              <View style={styles.columnas}>
                {imagenFruta(item)}
              </View>
                <View style={styles.columnas}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}€</Text>
                </View>                
            </View>
          );
        
          if(loading){
            return (<Text>Cargando...</Text>)
          }
          else{
            return (
              <View>
                <FlatList 
                    data={fruits}
                    renderItem={(renderItem)}
                    keyExtractor={item=>item.id}
                    refreshControl={
                        <RefreshControl
                        refreshing={refrehing}
                        onRefresh={onRefresh}
                        />
                    }
                />
              </View>
            );
          }

}

export default FrutasMostrar
