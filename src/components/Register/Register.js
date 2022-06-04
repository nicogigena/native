import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';

class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
    this.styles = StyleSheet.create({
        container:{
          width:"100%",
          margin:5,
          padding:5,
          borderBottomWidth:1
      },
      field:{
        fontSize:18,
        borderWidth: 1,
        padding: 5,
        margin: 2
      },
      texto:{
          fontSize:18
      },
      image:{
          height:200
      }
      })
  }

  onSubmit(){
      console.log(this.state.email);
      console.log(this.state.password);
  }


  render() {
      console.log(this.props);
    return (
        <View style={this.styles.container}>
            <Text style={this.styles.texto}>Login</Text>
            <TextInput style={this.styles.field}
                keyboardType='email-adress'
                placeholder='email'
                onChangeText={ text => this.setState({email:text})}/>
            <TextInput style={this.styles.field}
                keyboardType='default'
                placeholder='password'
                secureTextEntry={true}
                onChangeText={text=>this.setState({password:text})}/>

            <TouchableOpacity onPress={()=>this.onSubmit()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>

      
    );
  }

}

export default Register