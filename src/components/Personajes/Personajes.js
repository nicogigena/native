import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator} from 'react-native';
import Card from '../Card/Card'

class Personajes extends Component{
  constructor(props) {
    super(props);
    this.state = {
        cuenta:0,
        movies: [],
        loading:true,
    }
    this.styles = StyleSheet.create({
        container:{
            width:"100%"
        },
        list:{
            flex:1,
            flexWrap:'wrap',
        }
    });
  }

  componentDidMount() {
    let url =
      "https://rickandmortyapi.com/api/character?page=1";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        this.setState({
          movies: data.results,
          loading:false
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.props.styles);
    return (
        <View style={this.styles.container}>
            <Text>Personajes</Text>
            {this.state.loading==true ? 
                <ActivityIndicator/>: <FlatList data={this.state.movies}
                                                keyExtractor={item => item.id.toString()}
                                                renderItem={ ({item}) => <Card props={item}/>}
                                                style={this.styles.list}/>
            }
        </View>

      
    );
  }

}

export default Personajes