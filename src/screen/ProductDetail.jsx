import {View, Text, ScrollView, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import ButtonOpacity from '../components/ButtonOpacity';
import styles from '../style/ProductDetail';
import axios from 'axios';
import authAction from '../redux/actions/auth';
import { useDispatch } from 'react-redux';


const ProductDetail = ({navigation, route}) => {

  const {id_product} = route.params;
  const dispatch = useDispatch();

  const [product, setProduct] = useState([])



  const getProductByid = () => {
    axios.get(`https://coffeeadictbe.vercel.app/coffee/product/${id_product}`)
    .then((res) => {
      setProduct(res.data.result.data[0])
      // console.log(res.data.result.data[0])
    })

    .catch((err) => {
      console.log(err.response.data.msg)
    })
  }

  useEffect(() => {
    getProductByid();
  }, [])

  const costing = (price) => {
    return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }


  const handleRedux = () => {
    dispatch(authAction.productThunk(
      {
        id_product: id_product,
        price: product.price,
        name_product: product.name,
        status: null,
        delivery: null,
        total: 0,
        image: product.image,
        qty: 1,
        payment_method: null,
        size:product.size,
        id_promo:null
      },
      () => {
        navigation.navigate('Cart_Page')
      }
      ))
  }



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.img_bar}>
          <Image style={styles.img_product} source={{uri: product.image}} />
        </View>
        <Text style={styles.name_product}>{product.name}</Text>
        <Text style={styles.price}>{costing(product.price)}</Text>
        <View style={styles.text_bar}>
          <Text style={styles.title_info}>Delivery info</Text>
          <Text style={styles.deliver_desc}>
            Delivered only on monday until friday from 1 pm to 7 pm
          </Text>
        </View>
        <View style={styles.text_bar}>
          <Text style={styles.title_info}>Description</Text>
          <Text style={styles.desc_text}>
            {product.description}
          </Text>
        </View>
        <ButtonOpacity
          color={'#6a4029'}
          text="Add to cart"
          radius={20}
          colorText="white"
          height={70}
          width={`90%`}
          marginBottom={10}
          onPressHandler={{
            onPress: handleRedux,
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
