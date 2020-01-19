import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text,
} from 'react-native';

import Todo from './components/Todo'

export default class App extends Component {
  state = {
    usuario: 'mister',
    todos: [
      { id: 0, text: 'Fazer cafe' },
      { id: 1, text: 'Estudar essa parada' },
    ],
  };

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, 'novo'] });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.scrollView}>
          <View>
            <Text>{this.state.usuario}</Text>
            {this.state.todos.map(todo => (
              <Todo key={Math.random()} title={todo.text} />
            ))}
            <Button title="Adicionar todo" onPress={this.addTodo} />
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
