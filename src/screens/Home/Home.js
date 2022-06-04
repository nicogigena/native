import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Contador from '../../components/Contador/Contador'
import Personajes from '../../components/Personajes/Personajes'
import Register from '../../components/Register/Register'

function Home(){

    const styles = StyleSheet.create({
        container:{
            width:'80%'
        },
        block:{
            margin: 10
        },
        texto:{
            fontSize:18
        },
        boton:{
            borderRadius: 5,
            backgroundColor: 'grey',
            padding: 3,
            textAlign: 'center'
        },
        image:{
            height:200
        }
    })

    return(
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.texto}>Hola Mundo</Text>
                <TouchableOpacity onPress={()=>console.log("Me clickearon")} style={styles.boton}><Text>¡Clickeame!</Text></TouchableOpacity>
            </View>
            <View style={styles.block}>
                <Contador/>
            </View>
            <View style={styles.block}>
                <Register/>
                <Personajes/>
            </View>
        </View>
    )
}

export default Home