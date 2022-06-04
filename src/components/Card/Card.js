import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, TextInputComponent, FlatList} from 'react-native';

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
        cuenta:0,
        textComment:'',
        comments:[],
    };
    this.styles = StyleSheet.create({
        container:{
          width:"100%",
          margin:5,
          padding:5,
          borderBottomWidth:1
      },
      texto:{
          fontSize:18,
          textAlign:'center'
      },
      boton:{
          borderRadius: 5,
          backgroundColor: 'lightgreen',
          padding: 3,
          textAlign: 'center',
      },
      image:{
          height:200
      },
      field:{
        width:'70%',
        marginRight:'10%',
        borderWidth: 1
      },
      fieldButton:{
          width: '20%',
          borderWidth: 1,
          backgroundColor: 'grey',
          paddingLeft:3,
      },
      fieldContainer:{
          flex:1,
          flexWrap:'wrap',
          flexDirection:'row'
      },
      flatList:{
          marginLeft:10,
      },
      flatListText:{
          marginLeft:10,
          borderBottomWidth:1
      },
      flatListContainer:{
          borderWidth:1
      },
      flatListContainerEmpty:{
      }




      })
  }

  onSubmit(){
        console.log(this.state.text);
        let lista = this.state.comments
        lista.push(this.state.textComment)
        this.setState({
            comments:lista,
            textComment:''})
        console.log(this.state.comments);
  }

  render() {
    return (
        <View style={this.styles.container}>
            <TouchableOpacity>
                <Image  style={this.styles.image}
                        source={{uri:this.props.props.image}}
                        resizeMode='contain'/>
                <Text style={this.styles.texto}>{this.props.props.name}</Text>
            </TouchableOpacity>
            <View style={this.styles.flatListContainer}>
                <FlatList data={this.state.comments}
                    renderItem={ ({item}) => <Text style={this.styles.flatListText}>{item}</Text>}
                    style={this.styles.flatList}
                    />

            </View>
            <View style={this.styles.fieldContainer}>
                <TextInput style={this.styles.field}
                    keyboardType='default'
                    placeholder='Comenta algo...'
                    onChangeText={(text)=>this.setState({textComment:text})}
                    value={this.state.textComment}/>
                <TouchableOpacity style={this.styles.fieldButton} onPress={()=>this.onSubmit()}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>

        </View>

      
    );
  }

}

export default Card