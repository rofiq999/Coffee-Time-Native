import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import image from '../assets/splash/get_started.png';
import styles from '../style/Splash';
import ButtonOpacity from '../components/ButtonOpacity';

const Splash = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title_center}>Coffee for Everyone</Text>
        <Image source={image} style={styles.image} />
        <ButtonOpacity
          color={'#6a4029'}
          text="Get Started"
          radius={20}
          colorText="white"
          height={70}
          width={`90%`}
          marginBottom={10}
          onPressHandler={{
            onPress: () => navigation.navigate('Get_Start'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
            onLongPress: () => navigation.popToTop(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Splash;
