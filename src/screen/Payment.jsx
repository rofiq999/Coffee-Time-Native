import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/Payment';
import img_hazzelnut from '../assets/payment/img_hazzelnut.png';
import Card from 'react-native-vector-icons/FontAwesome';
import Bank from 'react-native-vector-icons/FontAwesome';
import Deleivery from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonOpacity from '../components/ButtonOpacity';
import {NativeBaseProvider, Radio} from 'native-base';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { transactions } from '../utils/axios';

const Payment = ({navigation}) => {
  
  const product = useSelector(state => state.auth.product);

  const [value, setValue] = useState('Card');


  const costing = (price) => {
    return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  

  const handleTransactions = async () => {
    try {
      const getToken = await AsyncStorage.getItem("token")
      const response = await transactions(getToken, {
        product_id: product.id_product,
        promo_id: product.id_promo,
        delivery_id: product.delivery,
        method_payment: value,
        qty: product.qty,
        tax: 10,
        total: product.total,
        status: "success"
      })
      console.log(response.data)
      navigation.push('Home')
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <NativeBaseProvider>
      <ScrollView>
        <View>
          <View style={styles.content_all}>
            <Text style={styles.products}>Products</Text>
            <View style={styles.content_product}>
              <View style={styles.content_img}>
                <View style={styles.content_warp}>
                  <Image
                    source={{uri: product.image}}
                    style={styles.image_payment}
                  />
                  <View style={styles.content_hazzelnut}>
                    <Text style={styles.text_hazzel}>
                      {product.name_product}
                    </Text>
                    <Text style={styles.text_hazzel}>x {product.qty}</Text>
                    <Text style={styles.text_hazzel}>
                      {(product.size === 'M' || product.size === 'm')
                        ? 'Medium'
                        : (product.size === 'L' || product.size === 'l')
                        ? 'Large'
                        : 'Extra Large'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.Idr}>{costing(product.price)}</Text>
              </View>
            </View>
            <Text style={styles.text_payment}>Payment method</Text>
            <View style={styles.content_card}>
              <View style={styles.content_warp}>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={nextValue => {
                    setValue(nextValue);
                  }}>
                  <Radio value={'Card'} my={1} colorScheme="amber">
                    <View style={styles.content_sec}>
                      <View style={styles.content_payment}>
                        <Card
                          color="#FFF"
                          brand={'FontAwesome'}
                          name="credit-card"
                          size={25}
                          type="material"
                        />
                      </View>
                      <Text style={styles.text_card}> Card</Text>
                    </View>
                  </Radio>
                  <Radio value={'Bank'} my={1} colorScheme="amber">
                    <View style={styles.content_sec}>
                      <View style={styles.content_payment}>
                        <Bank
                          color="#FFF"
                          brand={'FontAwesome'}
                          name="bank"
                          size={25}
                          type="material"
                        />
                      </View>
                      <Text style={styles.text_card}> Bank account</Text>
                    </View>
                  </Radio>
                  <Radio value={'Cash on Delivery'} my={1} colorScheme="amber">
                    <View style={styles.content_tree}>
                      <View style={styles.content_payment}>
                        <Deleivery
                          color="#000"
                          brand={'MaterialCommunityIcons'}
                          name="truck-delivery"
                          size={25}
                          type="material"
                        />
                      </View>
                      <Text style={styles.text_card}> Cash on delivery</Text>
                    </View>
                  </Radio>
                </Radio.Group>
              </View>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_total}>Tax & Fees</Text>
              <Text style={styles.text_price}>10%</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_total}>Shipping</Text>
              <Text style={styles.text_price}>{(product.delivery === 1) ? costing(5000) : 0}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_total}>Total</Text>
              <Text style={styles.text_price}>{costing(product.total)}</Text>
            </View>
            <ButtonOpacity
              color={'#6A4029'}
              text="Proceed payment"
              radius={20}
              colorText="white"
              height={60}
              width={`100%`}
              marginBottom={20}
              marginTop={20}
              onPressHandler={{
                onPress: handleTransactions,
                onPressIn: () => console.log('Pressed In'),
                onPressOut: () => console.log('Pressed Out'),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Payment;
