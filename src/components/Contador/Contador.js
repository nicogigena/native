import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Contador extends Component{
  constructor(props) {
    super(props);
    this.state = {
        cuenta:0,
        styles: StyleSheet.create({
          container:{
            width:"100%"
        },
        texto:{
            fontSize:18
        },
        boton:{
            borderRadius: 5,
            backgroundColor: 'lightgreen',
            padding: 3,
            textAlign: 'center',
            
        }
        })
    };
  }

  contadorDeClicks(){
      this.setState({
          cuenta: this.state.cuenta + 1
      })
      console.log(this.state.cuenta);
  }

  render() {
    console.log(this.props.styles);
    return (
        <View style={this.state.styles.container}>
            <Text style={this.state.styles.texto}>Cantidad de clicks: {this.state.cuenta}</Text>

            <TouchableOpacity style={this.state.styles.boton} onPress={() => this.contadorDeClicks()}><Text>¡Clickeame y sumo 1!</Text></TouchableOpacity>
          
        </View>

      
    );
  }

}

export default Contador