import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { View, Text, StyleSheet, Platform } from 'react-native'

export default class Todo extends Component {
  static defaultProps = {
    title: 'Todo Padrão',
  }

  static propTypes = {
    title: PropTypes.string,
  };

  render() {

    return (
      <View>
        {Platform.OS === 'ios' ? <Text>iOS</Text> : <Text style={styles.text}>Android</Text>}
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 22,
      }
    })
  }
});
