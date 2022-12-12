import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ListItem, Button} from '@rneui/themed';
import img_product from '../assets/product/img_product.png';
const CardHistory = props => {
  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
  return (
    <ListItem.Swipeable
      style={styles.card}
      rightContent={() => (
        <Button
          title=""
          //ganti dengan axios delete per id
          onPress={props.handler}
          icon={{name: 'delete', color: 'white'}}
          buttonStyle={{
            borderRadius: 50,
            width: 60,
            height: 60,
            marginTop: '60%',
            marginLeft: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#6A4029',
          }}
        />
      )}>
      <View style={styles.card_bar}>
        <View style={styles.img_bar}>
          <Image style={styles.img} source={props.image} />
        </View>
        <View style={styles.content_right}>
          <Text style={styles.name}>{props.name_product}</Text>
          <Text style={styles.price}>{costing(props.price)}</Text>
          <Text style={styles.status}>Status :{props.status}</Text>
        </View>
      </View>
      <View></View>
    </ListItem.Swipeable>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  card_bar: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 50,
  },
  img_bar: {width: '80%'},
  img: {
    width: 100,
    height: 100,
    borderRadius: 200,
    marginLeft: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 22,
    fontFamily: 'Poppins',
    color: '#000',
  },
  price: {
    fontWeight: '400',
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'Poppins',
    color: '#895537',
  },
  status: {
    fontWeight: '400',
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'Poppins',
    color: '#895537',
  },
  card: {
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
  },
});
