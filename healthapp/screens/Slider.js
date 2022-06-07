import React, {useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import Maintab from './Maintab';
import SliderContent from './SliderContent';
import slides from './slides';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  //   const scrollTo = () => {
  //     if (currentIndex < slides.length - 1) {
  //       slidesRef.current.scrollToIndex({index: currentIndex + 1});
  //     } else {
  //       console.log('Scroll to index');
  //     }
  //   };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <SliderContent data={slides} scrollX={scrollX} />
      <FlatList
        data={slides}
        keyExtractor={slides.id}
        renderItem={({item}) => <Maintab item={item.name} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
