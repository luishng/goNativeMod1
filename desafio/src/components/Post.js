import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
        <View style={styles.divider} />
        <View>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 5,
  },
  divider: {
    borderBottomColor: '#343',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  title: {
    color: '#666',
  },
  text: {
    color: '#999',
  },
  description: {
    color: '#888',
  },
});
