import React, { Component } from 'react';
import { View, 
  Text,
  StyleSheet,
  FlatList
 } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {nome: 'Bruno', idade: 23, email:'bruno@gmail.com'},
        {nome: 'Pablo', idade: 24, email:'pablo@gmail.com'},
        {nome: 'Fulano', idade: 39, email:'fulano@gmail.com'},
        {nome: 'Ciclano', idade: 18, email:'ciclano@gmail.com'}
      ]
    };
  }
    render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        renderItem={({item})=> <Pessoa/>}
        />
      </View>
    );
  } 
}
  const styles = StyleSheet.create({
    container:{
      flex:1,
    }
  });

export default App;

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> App </Text>
      </View>
    );
  }
}

export default app;

