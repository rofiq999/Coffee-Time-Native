import {Text, View, ScrollView, Image, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonOpacity from '../components/ButtonOpacity';
import image from '../assets/empty/nohistory.png';
import SwipeHand from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/History';
import CardHistory from '../components/CardHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  // horizontalScale,
  // moderateScale,
  verticalScale,
} from '../helpers/Metrics';

import {getHistoryAll, deleteHistoryId} from '../utils/axios';
import {NativeBaseProvider, Button, Modal, Center} from 'native-base';

const History = ({navigation}) => {
  const [history, setHistory] = useState([]);
  const [notfound, setNotfound] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [historyId, setHistoryId] = useState('');

  const getDataHistory = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      const response = await getHistoryAll(getToken);
      console.log(response.data.result.data);
      setHistory(response.data.result.data);
    } catch (error) {
      // console.log(error.response.data.msg)
      setNotfound(error.response.data.msg);
    }
  };

  useEffect(() => {
    getDataHistory();
    console.log(history.image);
  }, [history]);

  const deleteHistory = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      const response = await deleteHistoryId(getToken, historyId);
      console.log(response.data.result.data);
      ToastAndroid.showWithGravity(
        'Delete history success',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
      setShowModal(false);
    } catch (error) {
      console.log(error)
      ToastAndroid.showWithGravity(
        error.response.data.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
      setNotfound(error.response.data.msg);
    }
  };
  return (
    <ScrollView>
      {/* conditional render not found */}
      {notfound === 'History Not Found' ? (
        <View style={styles.container_notfound}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>No history yet</Text>
          <Text style={styles.title_info}>
            Hit the orange button down below to Create an order
          </Text>
          <ButtonOpacity
            color={'#6a4029'}
            text="Start odering"
            radius={20}
            colorText="white"
            height={70}
            width={`90%`}
            marginTop={verticalScale(200)}
            marginBottom={verticalScale(10)}
            onPressHandler={{
              onPress: () => navigation.navigate('Get_Start'),
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
              onLongPress: () => navigation.popToTop(),
            }}
          />
        </View>
      ) : (
        <NativeBaseProvider>
          <Center>
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              _backdrop={{
                _dark: {
                  bg: 'coolGray.800',
                },
                bg: 'warmGray.50',
              }}>
              <Modal.Content maxWidth="350" maxH="212">
                <Modal.CloseButton />
                <Modal.Header>Delete History</Modal.Header>
                <Modal.Body>
                are you sure you want to delete this history
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      colorScheme="success"
                      width={20}
                      onPress={() => {
                        deleteHistory(), setShowModal(false);
                      }}>
                      Ok
                    </Button>
                    <Button
                      variant="solid"
                      width={20}
                      colorScheme="danger"
                      onPress={() => {
                        setShowModal(false);
                      }}>
                      Cancel
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Center>

          <View style={styles.container}>
            <View style={styles.title_bar}>
              <Text style={styles.title_order}>Order History</Text>
              <Text style={styles.swipeHand}>
                <SwipeHand
                  color="#000"
                  brand={'MaterialCommunityIcons'}
                  name="gesture-swipe-horizontal"
                  size={25}
                  type="material"
                />
                swipe on an item to delete
              </Text>
              {history.map(e => (
                <CardHistory
                  key={e.id}
                  name_product={e.name}
                  price={e.total}
                  image={{uri: e.image}}
                  status={e.status}
                  handler={() => {
                    setHistoryId(e.id), setShowModal(true);
                    // setShowModal(true);
                    console.log('click');
                  }}
                />
              ))}
            </View>
          </View>
        </NativeBaseProvider>
      )}
    </ScrollView>
  );
};

export default History;
