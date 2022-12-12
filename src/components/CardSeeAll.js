import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';


import styles from '../style/CardSeeAll';
import { useNavigation } from '@react-navigation/native';

const CardProduct = (props) => {

  const navigate = useNavigation()

  const costing = (price) => {
    return 'IDR ' + parseFloat(price).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

  return (
    <TouchableOpacity onPress={() => { navigate.push("ProductDetail", {
      id_product : props.id
    })}}>
      <View style={styles.gap_product}>
        <View style={styles.Content_product}>
          <View>
            <Image source={{uri:props.image_product}} style={styles.image_product} />
          </View>
          <View style={styles.text}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.size}>{props.size}</Text>
            <Text style={styles.price}>{costing(props.price)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;