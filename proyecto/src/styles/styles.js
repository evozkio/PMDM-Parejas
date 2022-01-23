import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {

        centro: {
            textAlign: 'center',
            flexDirection: 'column',
            color: 'black'
        },
        search: {
            
        },
        c: {
            marginTop: 40,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
        },
        c2: {
            marginTop: 10,
            height: 40,
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
        },
        c3: {
            
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
            textAlign: 'center'
        },
        boton: {
            padding: 10,
            borderRadius: 30,
            marginTop: 40,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'blue',
            marginLeft: 90,
            marginRight:90,
        },
        desplegable: {
            width: '75%'
        },
        name: {
            fontWeight: 'bold',
            color: 'black',
          },
  
          columnas: {
            flex: 1,
            flexDirection: 'column'
          },
          
          price: {
            color: 'red',
            marginTop: 20,
          },
          
          imagen: {
            marginHorizontal: 80,
            height: 80, 
            width: 80
          },
          
          centro: {
            flexDirection: 'row',
            padding: 20,
            marginLeft: 10,
            marginBottom: 10,
            borderBottomColor: 'blue',
            borderBottomWidth: 1,
            textAlign: "center",
          },
          
          largo: {
            flexDirection:'row',
            textAlign: 'center'
          } ,
        mdd: {
            marginTop: 40,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            borderWidth: 1,
        },
        mdd2: {
            marginTop: 10,
            borderWidth: 1,
            marginLeft: 30,
            marginRight:30,
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            paddingLeft: 20
        }

    }
);
export default styles;