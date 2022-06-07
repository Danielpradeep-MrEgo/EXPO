import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Home from './Home';

const Maintab = ({item}) => {
  const {width} = useWindowDimensions();
  console.log(item);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          width,
        }}>
        <Home />
        <View>{item}</View>
      </View>
    </View>
  );
};

export default Maintab;

const styles = StyleSheet.create({});
