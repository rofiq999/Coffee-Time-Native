import React, {useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
  FlatList,
} from 'react-native';

import axios from 'axios';

import CardProduct from '../components/CardSeeAll';
import {Box, Center, CheckIcon, Select} from 'native-base';
import styles from '../style/See_All';
import {useFocusEffect} from '@react-navigation/core';
import {URL_BE} from '@env';

function See_All({route}) {
  const {category, sort} = route.params;

  const [product, setProduct] = useState([]);
  const [sorting, setSorting] = useState('');
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(true);

  const handleNext = () => {
    if (next === null) return setLoading(false);
    handleaxios(next);
  };

  const handleaxios = url => {
    setLoading(true);
    setTimeout(() => {
      axios
      .get(url)
      .then(res => {
        setProduct([...product, ...res.data.result.data]), console.log(product);
        setNext(res.data.result.next);
        setLoading(false);
      })
      .catch(err => {
        ToastAndroid.showWithGravity(
          err.response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        setLoading(false);
      });
    }, 2000);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <CardProduct
          key={item.id}
          id={item.id}
          name={item.name}
          image_product={item.image}
          price={item.price}
          size={item.size}
        />
      </View>
    );
  };

  const renderLoader = () => {
    return loading ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : (
      <View>
        <Text style={styles.text_sold}>data not found </Text>
      </View>
    );
  };

  const headerList = () => {
    return <View style={{paddingVertical: 20}}></View>;
  };

  useFocusEffect(
    React.useCallback(() => {
        handleaxios(
          `${URL_BE}/product?category=${
            category === 'favorite' ? '' : `${category}`
          }&sorting=${sorting}&page=1&limit=4`,
        );      
      return () => {
        setProduct([]);
      };
    }, [category, sorting]),
  );

  return (
    // <ScrollView>
    <View style={styles.all_content}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{category}</Text>
      </View>
      {/* sorting */}
      {sort === 'favorite' ? (
        ''
      ) : (
        <View style={{paddingTop:20}}>
          <Center>
            <Box maxW="300">
              <Select
                selectedValue={sorting}
                minWidth="200"
                accessibilityLabel="Sort Product"
                placeholder="Sort Product"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => {
                  setSorting(itemValue);
                }}>
                <Select.Item label="cheapest" value="cheapest" />
                <Select.Item label="expensive" value="expensive" />
                <Select.Item label="newest" value="newest" />
                <Select.Item label="lates" value="lates" />
              </Select>
            </Box>
          </Center>
        </View>
      )}
      {/* end sorting */}

      <View style={styles.content_card_product}>
        <View style={styles.content_list_product}>
          <View
            style={{
              flexDirection: `row`,
              justifyContent: `space-between`,
              paddingBottom: 20,
            }}>
            <FlatList
              data={product}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={headerList}
              onEndReachedThreshold={4}
              onEndReached={handleNext}
              ListFooterComponent={renderLoader}
            />
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}

export default See_All;
