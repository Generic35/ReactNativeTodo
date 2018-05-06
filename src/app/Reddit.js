import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    })
      .then((res) => res.json().then())
      .then((data) => { 
        this.setState({posts: data.data.children})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>reddit</Text>
        <View>
          {this.state.posts.map((post, i) => (
            <Text key={i}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
})