import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';

import axios from 'axios';

import CardProduct from '../components/CardSeeAll';

import styles from '../style/See_All';

function See_All({route}) {
  const [product, setProduct] = useState([]);
  // const [category, setCategory] = useState('non_coffee');
  // const [sort, setSort] = useState();
  // const [search, setSeacrh] = useState('');

    const {category,sort} = route.params;

  useEffect(() => {
    axios
      .get(
        `https://coffee-time-be-new.vercel.app/coffee/product?category=${category}&sorting=${sort}`,
      )
      .then(res => {
        setProduct(res.data.result.data), console.log('data ke get');
      })
      .catch(err => {
        // setNotfound(err.response.data.msg)
        console.log(err.response.data.msg);
      });
  }, [category]);

  return (
    <ScrollView>
      <View style={styles.all_content}>
        <View style={styles.text_container}>
          <Text style={styles.text}>{category}</Text>
        </View>
        <View style={styles.content_card_product}>
          <View style={styles.list_product}>
            {/* product.length < 0 || notfound !== "Product Not Found" ? (<Text>Not Found Product</Text>) : */}
            {product.map(e => (
              <CardProduct
                key={e.id}
                id={e.id}
                name={e.name}
                image_product={e.image}
                price={e.price}
                size={e.size}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default See_All;
