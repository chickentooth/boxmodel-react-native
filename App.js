import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';




const minion = require('./large.jpg');
const Img =({style}) => (<Image style={[styles.content, {width: undefined}, style]} source={minion}/>);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  content: {
    backgroundColor:  'lightgoldenrodyellow',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'goldenrod',
    paddingHorizontal: 30
  }
});
const BoxModelDemo = () => (
  <View style={styles.main}>
      <Img style={{flexGrow : 1}} />
      <Img style={{flexGrow : 2}} />
      <Img style={{flexGrow : 1}} />
    </View>
);



module.exports = BoxModelDemo;
