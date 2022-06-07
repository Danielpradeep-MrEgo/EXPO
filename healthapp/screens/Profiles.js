import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import badges from './badges';
import ProfsData from './ProfsData';

const {width, height} = Dimensions.get('window');
const SPACING = 10;

const Profiles = ({item, index}) => {
  const mappp = [1, 2, 3, 4, 5];
  const scrollX = React.useRef(new Animated.Value(0)).current;

  console.log(scrollX, 'ind');

  const scale = scrollX.interpolate({
    inputRange: [(index - 2) * 50, (index - 1) * 50, index * 50],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <View>
      <View style={{flexDirection: 'row', marginLeft: 10, width: '90%'}}>
        {/* {mappp.map(data => (
          <View style={{alignItems: 'center', marginLeft: 10}}>
          <View
          style={{
              width: 60,
              height: 60,
              backgroundColor: 'blue',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
            source={{uri: 'https://wallpaperaccess.com/full/983524.jpg'}}
            style={{width: 50, height: 50, borderRadius: 25}}
            />
            </View>
            <Text>Group 1</Text>
            </View>
        ))} */}
      </View>
      <Animated.View
        style={{
          marginHorizontal: 10,
          transform: [{scale}],
        }}>
        <Image
          source={{uri: item?.image}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            resizeMode: 'cover',
            zIndex: 1,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
//
