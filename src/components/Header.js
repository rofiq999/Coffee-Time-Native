import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

import bar from '../assets/header/bar.png';
import chat from '../assets/header/chat.png';
import shopping from '../assets/header/shopping.png';
import styles from '../style/Header';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigate = useNavigation()

  const image = useSelector((state) => state.auth.profile.image);
  
  return (
    <View>
      <View style={styles.container_navbar}>
        <View style={styles.navbar_left}>
            <Image source={bar} />
        </View>
        <View style={styles.navbar_right}>
          <TouchableOpacity onPress={() => {console.log("Page Chat on Going")}}>
            <Image source={chat} style={styles.chat_navbar}></Image>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => {navigate.push("Cart_Page")}}>
            <Image source={shopping} style={styles.shopping_navbar}></Image>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => {navigate.push("Profile")}}>
            <Image source={{uri:`${image}`}} style={styles.profile_image_navbar} />
          </TouchableOpacity >
        </View>
      </View>
      {/* Give Drawer In here */}
    </View>
  );
};

export default Header;
