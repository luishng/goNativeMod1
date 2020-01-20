import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlightBase,
} from 'react-native';

import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        name: 'Luis Henrique',
        description: 'teste',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        name: 'Luis',
        description: 'teste',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        name: 'Luis Henrique',
        description: 'teste',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        name: 'Luis',
        description: 'teste',
      },
    ],
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            name={post.name}
            description={post.description}
          />
        ))}
        <Post />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
