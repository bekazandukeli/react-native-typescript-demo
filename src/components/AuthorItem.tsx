import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import Arrow from '../assets/images/Arrow';

type AuthorItemProps = {
  userName: string;
  userEmail: string;
  postNumber: number;
  pressed?: boolean;
};

export default function AuthorItem({
  userEmail,
  userName,
  postNumber,
  pressed,
}: AuthorItemProps) {
  const userInitials =
    userName.split(' ')[0][0].toUpperCase() +
    userName.split(' ')[1][1].toUpperCase();

  return (
    <View style={[style.container]}>
      <View style={style.userInfoContainer}>
        <View style={style.iconBackground}>
          <Text style={style.iconText}>{userInitials}</Text>
        </View>
        <View style={style.userInfoWrapper}>
          <Text style={style.userName}>
            {userName.length > 22 ? userName.slice(0, 20) + '...' : userName}
          </Text>
          <Text style={style.userEmail}>{userEmail}</Text>
        </View>
      </View>
      <View style={style.goToPostsWrapper}>
        <Text style={[style.goToPostsText]}>{postNumber} posts</Text>
        <Arrow style={style.goToPostsArrow} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 'auto',
    height: 72,
    position: 'relative',
    paddingLeft: 16,
    paddingRight: 4,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },
  iconBackground: {
    height: 40,
    width: 40,
    borderRadius: 99,
    backgroundColor: '#6FCF97',
    marginVertical: 2,
  },
  iconText: {
    fontSize: 14,
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  userInfoContainer: {
    padding: 0,
    flexDirection: 'row',
  },
  userInfoWrapper: {
    marginHorizontal: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
  },
  userEmail: {
    fontSize: 12,
    color: '#382A2C',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    lineHeight: 16,
    opacity: 0.54,
  },
  goToPostsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 18.59,
  },
  goToPostsText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
    marginRight: 15,
  },
  goToPostsArrow: {
    position: 'relative',
    top: 1,
  },
});
