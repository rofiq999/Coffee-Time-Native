import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ArrowRight from 'react-native-vector-icons/Feather';
import ArrowRightSec from 'react-native-vector-icons/AntDesign';
import styles from '../style/Cart';
import {useDispatch, useSelector} from 'react-redux';
import authAction from '../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.auth.product);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigation();

  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  const min = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  const max = () => {
    setQuantity(quantity + 1);
  };

  const handleRedux = () => {
    dispatch(
      authAction.productThunk(
        {
          id_product: product.id_product,
          price: product.price,
          name_product: product.name_product,
          status: null,
          delivery: null,
          total: product.price * quantity + (product.price * 10) / 100,
          image: product.image,
          qty: quantity,
          payment_method: null,
          size: product.size,
          id_promo: product.id_promo,
        },
        () => {
          navigation.navigate('Delivery');
        },
      ),
    );
  };

  return (
    <ScrollView>
      <View style={styles.content_all}>
        <View style={styles.content_product}>
          <View style={styles.content_img_product}>
            <Image source={{uri: product.image}} style={styles.icon_product} />
            <Text style={styles.price}>{costing(product.price)} </Text>
          </View>
          <View style={styles.content_veggie}>
            <Text style={styles.veggie}>{product.name_product}</Text>
            <View style={styles.content_counter}>
              <View style={styles.content_down} onStartShouldSetResponder={min}>
                <Text style={styles.down}>—</Text>
              </View>

              <Text style={styles.number}>{quantity}</Text>

              <View style={styles.content_up} onStartShouldSetResponder={max}>
                <Text style={styles.up}>+</Text>
              </View>
            </View>
          </View>
        </View>
        {product.id_promo === null ? (
          <TouchableOpacity
            onPress={() => {
              navigate.push('Cupon');
            }}>
            <View style={styles.btn_navigateSec}>
              <Text style={styles.text_btn}>Apply Delivery Coupons</Text>
              <ArrowRightSec
                color="#6A4029"
                brand={'AntDesign'}
                name="arrowright"
                size={25}
                type="material"
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.cupon_container}>
            <Text style={styles.text_cupon}>you already use cupon</Text>
          </View>
        )}
        <View style={styles.content_line}>
          <View style={styles.line}></View>
        </View>
        <View style={styles.content_total}>
          <Text style={styles.total}>Item Total</Text>
          <Text style={styles.idr}>{costing(product.price * quantity)}</Text>
        </View>
        <View style={styles.content_total}>
          <Text style={styles.total}>Tax</Text>
          <Text style={styles.idr}>10%</Text>
        </View>
        <View style={styles.content_total}>
          <Text style={styles.subtotal}>Total :</Text>
          <Text style={styles.sub_idr}>
            {costing(product.price * quantity + (product.price * 10) / 100)}
          </Text>
        </View>
        <View
          style={styles.btn_navigate}
          onStartShouldSetResponder={handleRedux}>
          <Text style={styles.text_btn}>CHECKOUT</Text>
          <ArrowRight
            color="#6A4029"
            brand={'Feather'}
            name="chevron-right"
            size={25}
            type="material"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
