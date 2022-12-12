import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import ButtonOpacity from '../components/ButtonOpacity';
import styles from '../style/ProfileEdit';
import img_product from '../assets/profile/img_profile.png';
import {NativeBaseProvider, Radio, Stack, useTheme} from 'native-base';
import Pencil from 'react-native-vector-icons/Octicons';

const ProfileEdit = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.img_bar}>
            <Image source={img_product} style={styles.img} />
            <View style={styles.pencil_bar}>
              {/* launch image with image picker */}
              <Pencil
                style={styles.pencil}
                color="#fff"
                brand={'Octicons'}
                name="pencil"
                onLongPress={() => console.log('onLongPress()')}
                onPress={() => console.log('click dong')}
                size={25}
                type="material"
              />
            </View>
          </View>
          {/* form input */}
          <View style={styles.form}>
            <View style={styles.input_bar}>
              <Text style={styles.label}>Name :</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#9F9F9F"
                value={name}
                onChangeText={e => {
                  setName(e), console.log(e);
                }}
              />
            </View>
            <View style={styles.radio_bar}>
              <Radio.Group
                name="Gender"
                value={gender}
                onChange={gender => {
                  setGender(gender);
                  console.log(gender);
                }}
                accessibilityLabel="Gender">
                <Stack
                  direction={{
                    base: 'row',
                    sm: 'row',
                  }}
                  alignItems={{
                    base: 'flex-start',
                    sm: 'center',
                  }}
                  space={4}
                  w="75%"
                  maxW="300px">
                  <Radio value="Female" colorScheme="amber" size="sm" my={1}>
                    Female
                  </Radio>
                  <Radio
                    value="Male"
                    colorScheme="amber"
                    size="sm"
                    my={1}
                    ml={3}>
                    Male
                  </Radio>
                </Stack>
              </Radio.Group>
            </View>
            <View style={styles.input_bar}>
              <Text style={styles.label}>Email Adress :</Text>
              <TextInput
                style={styles.input}
                placeholder="Email Adress"
                placeholderTextColor="#9F9F9F"
                value={email}
                keyboardType="email"
                onChangeText={e => {
                  setEmail(e), console.log(e);
                }}
              />
            </View>
            <View style={styles.input_bar}>
              <Text style={styles.label}>Phone Number :</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                placeholderTextColor="#9F9F9F"
                keyboardType="phone-pad"
                onChangeText={e => {
                  setPhone(e), console.log(e);
                }}
              />
            </View>
            <View style={styles.input_bar}>
              <Text style={styles.label}>Date of Birth :</Text>
              <TextInput
                style={styles.input}
                placeholder="YYYY/MM/DD"
                placeholderTextColor="#9F9F9F"
                value={birthday}
                onChangeText={e => {
                  setBirthday(e), console.log(e);
                }}
              />
            </View>
            <View style={styles.input_bar}>
              <Text style={styles.label}>Delivery Address :</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#9F9F9F"
                value={address}
                onChangeText={e => {
                  setAddress(e), console.log(e);
                }}
              />
            </View>
          </View>
          <ButtonOpacity
            color={'#6a4029'}
            text="Save"
            radius={20}
            colorText="white"
            height={70}
            width={`80%`}
            marginBottom={10}
            marginTop={10}
            onPressHandler={{
              onPress: () => navigation.navigate('Get_Start'),
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
              onLongPress: () => navigation.popToTop(),
            }}
          />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ProfileEdit;
