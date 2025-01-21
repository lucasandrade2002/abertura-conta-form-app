import React, { Component } from 'react';
import { View, Text} from 'react-native';

import styles from './assets/stylesheet'

import Form from './src/components/Form';

export default class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>App Desafio</Text>
        <Form />
      </View>
    )
  }
}
