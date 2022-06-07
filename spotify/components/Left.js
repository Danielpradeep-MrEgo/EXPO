import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import spotify from '../Images/Spotify.png';
import spotify from '../Images/spotify_logo.png';
import {Icon} from 'react-native-elements';

const Left = () => {
  return (
    <View style={{flex: 0.3, marginLeft: 20, marginTop: 10}}>
      <Image
        source={spotify}
        style={{width: 100, height: 50, resizeMode: 'contain'}}
      />

      <View>
        <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
      </View>
    </View>
  );
};

export default Left;

const styles = StyleSheet.create({});
