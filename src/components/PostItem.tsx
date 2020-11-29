import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type PostItemProps = {
  title: string;
  content: string;
  pressed: boolean;
};
export default function PostItem({title, content, pressed}: PostItemProps) {
  return (
    <View
      style={[styles.container, {backgroundColor: pressed ? '#eee' : '#fff'}]}>
      <Text style={styles.postTitle}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Text>
      <Text style={styles.postContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 113,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginHorizontal: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3.4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
    marginBottom: 9,
  },
  postContent: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 16,
    color: '#382A2C',
    opacity: 0.54,
  },
});
