import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Bruno', idade: 23, email: 'bruno@gmail.com'},
        {id: '2', nome: 'Pablo', idade: 24, email: 'pablo@gmail.com'},
        {id: '3', nome: 'Fulano', idade: 39, email: 'fulano@gmail.com'},
        {id: '4', nome: 'Ciclano', idade: 18, email: 'ciclano@gmail.com'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20,
  },
});
export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text> {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}
