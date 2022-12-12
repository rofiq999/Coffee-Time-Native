import {View, Text, TextInput, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../style/Cupon';
import icon_search from '../assets/cupon/icon_search.png';
import CardCupon from '../components/CardCupon';
import {useSelector} from 'react-redux';
import axios from 'axios';
// import authAction from '../redux/actions/auth';

const Cupon = () => {
  const product = useSelector(state => state.auth.product);
  // const dispatch = useDispatch();

  const [promo, setPromo] = useState([]);
  // const [promoID, setPromoID] = useState();
  // const [disc, setDisc] = useState();

  const handleGetPromo = () => {
    axios
      .get(
        `coffee-time-be-new.vercel.app/coffee/promo/?product_id=${product.id_product}`,
      )
      .then(res => setPromo(res.data.result))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    handleGetPromo();
  }, []);

  return (
    <ScrollView>
      <View style={styles.content_all}>
        <View style={styles.content_cupon}>
          <View style={styles.search}>
            <Image source={icon_search} style={styles.icon_search} />
            <TextInput
              style={styles.input}
              placeholder="Browse coupons"
              keyboardType="text"
            />
          </View>
        </View>
        <Text style={styles.text_claim}>Claim coupons by clicking it</Text>
        <View style={styles.content_card}>
          {promo[0] ? (
            promo.map((e, index) => (
              <CardCupon
                key={e.id}
                promo={promo[index].id}
                name_product={promo[index].name}
                code={promo[index].code}
                discount={promo[index].discount}
              />
            ))
          ) : (
            <View style={styles.no_cupon_container}>
              <Text style={styles.no_cupon}>You have no coupons left</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Cupon;
