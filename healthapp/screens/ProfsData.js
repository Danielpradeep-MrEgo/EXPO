import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import badges from './badges';
import Profiles from './Profiles';

const ProfsData = () => {
  const {width, height} = Dimensions.get('window');
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  console.log(scrollX, 'bad');

  return (
    <View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={badges}
        renderItem={({item, index}) => (
          <Profiles item={item} index={index} scroll={scrollX} />
        )}
        // keyExtractor={}
        horizontal
        bounces={false}
        // decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        // snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        ref={slidesRef}
        scrollEventThrottle={16}
      />

      <View></View>
    </View>
  );
};

export default ProfsData;

const styles = StyleSheet.create({});
