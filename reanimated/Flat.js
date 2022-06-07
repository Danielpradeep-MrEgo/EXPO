import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Test from './Test';

const DAFT_PUNK = 'Danny';
const ALBUM_COVERS = 'danny';

const songs = [
  {
    id: '1',
    title: 'One More Time',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS,
  },

  {
    id: '2',
    title: 'Motherboard',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.RANDOM_ACCESS_MEMORIES,
  },
];

const Flat = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  return (
    <ScrollView
      ref={scrollView => (this.scrollView = scrollView)}
      scrollEnabled={scrollEnabled}
      style={styles.container}>
      <DragSortableView
        dataSource={songs}
        parentWidth={parentWidth}
        childrenWidth={childrenWidth}
        childrenHeight={childrenHeight}
        scaleStatus={'scaleY'}
        onDragStart={(startIndex, endIndex) => {
          setScrollEnabled(false);
        }}
        onDragEnd={startIndex => {
          setScrollEnabled(true);
        }}
        onDataChange={data => {
          if (songs.length != songs.length) {
            this.setState({
              data: data,
            });
          }
        }}
        keyExtractor={(item, index) => item.txt} // FlatList作用一样，优化
        onClickItem={(data, item, index) => {}}
        renderItem={(item, index) => {
          return this.renderItem(item, index);
        }}
      />
    </ScrollView>
  );
};

export default Flat;

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
