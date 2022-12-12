import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import icon_granpa from '../assets/cupon/icon_granpa.png';
import {useDispatch, useSelector} from 'react-redux';
import authAction from '../redux/actions/auth';
import { useNavigation } from '@react-navigation/native';

const CardCupon = (props) => {
    const navigation = useNavigation()
  const product = useSelector(state => state.auth.product);
  const dispatch = useDispatch();

  const handleRedux = () => {
    return dispatch(
      authAction.productThunk(
        {
          id_product: product.id_product,
          price: (product.price - (product.price*props.discount / 100)),
          name_product: product.name_product,
          status: null,
          delivery: null,
          total: product.total,
          image: product.image,
          qty: product.qty,
          payment_method: null,
          size: product.size,
          id_promo: props.promo,
        },
        () => {
          navigation.push('Cart_Page');
        },
      ),
    );
  };
  return (
    <TouchableOpacity onPress={() => handleRedux()}>
      <View style={styles.cupon}>
        <View style={styles.card_cupon}>
          <Image source={icon_granpa} />
          <View style={styles.cupon_text}>
            <Text style={styles.text_cupon}>{props.name_product}</Text>
            <Text style={styles.text_code}>{props.code}</Text>
            <Text
              style={styles.text_date}>{`Discount : ${props.discount} %`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCupon;

const styles = StyleSheet.create({
  cupon: {
    marginTop: 20,
    paddingVertical: 10,
    paddingLeft: 20,
    width: '100%',
    height: 110,
    borderRadius: 20,
    backgroundColor: '#F5C361',
  },
  card_cupon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text_cupon: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 4,
    color: '#000',
    width: '100%',
    paddingTop: 10,
    textTransform: `uppercase`,
  },
  text_date: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
    width: '100%',
  },
  text_code: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
    width: '100%',
    paddingVertical: 3,
  },
  cupon_text: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingLeft: 10,
  },
});
