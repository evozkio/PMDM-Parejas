import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, RefreshControl } from "react-native";

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

        const onRefresh = React.useCallback (()=>{
          setRefreshing(true);
          wait(2000).then(()=> setRefreshing(false), getFruits())
        },[]);

        function getFruits(){
          fetch("http://10.0.2.2:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
            setFruits(responseJson);
            setLoading(false);
        })
          .catch(error => console.log(error));
        }

        
          useEffect(() => {
            getFruits();
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

export default FrutasMostrar
