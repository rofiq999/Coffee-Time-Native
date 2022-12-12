// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
// screen
import Splash from './src/screen/Splash';
import Register from './src/screen/Register';
import Get_Start from './src/screen/Get_Start';
import Login from './src/screen/Login';
import Forgot_password from './src/screen/Forgot_password';
import Forgot_password2 from './src/screen/forgot_password2';
import History from './src/screen/History';
import NoOrder from './src/screen/NoOrder';
import NoInternet from './src/screen/NoInternet';
import Home from './src/screen/Home';
import ProductDetail from './src/screen/ProductDetail';
import Profile from './src/screen/Profile';
import Cart_Page from './src/screen/Cart';
import Delivery from './src/screen/Delivery';
import ProfileEdit from './src/screen/ProfileEdit';
import Payment from './src/screen/Payment';
import Cupon from './src/screen/Cupon';

// import icon dari modole
import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import Cart from 'react-native-vector-icons/Feather';
import ButtonLeft from 'react-native-vector-icons/Feather';
import btn_left from './src/assets/btn_left.png';
import NewProduct from './src/screen/NewProduct';
import New_Promo from './src/screen/New_Promo';
import See_All from './src/screen/See_All';
const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
              // example use icon
              // headerRight: () => (
              //   <>
              //     <Chat
              //       style={styles.chat}
              //       color="#000"
              //       brand={'AntDesign'}
              //       name="message1"
              //       onLongPress={() => console.log('onLongPress()')}
              //       onPress={() => console.log('onPress()')}
              //       size={25}
              //       type="material"
              //     />
              //   </>
              // ),
            }}
          />
          <Stack.Screen
            name="ProfileEdit"
            component={ProfileEdit}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              // headerLeft: props => (
              //   <ButtonLeft
              //     {...props}
              //     color="#000"
              //     brand={'Feather'}
              //     name="chevron-left"
              //     size={25}
              //     type="material"
              //     onPress={() => {
              //       // Do something
              //       if (props.canGoBack()) {
              //         navigation.replace('Splash');
              //       }
              //     }}
              //   />
              // ),
              headerTitle: 'Edit Profile',
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTransparent: true,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name="NoInternet"
            component={NoInternet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Orders"
            component={NoOrder}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTransparent: true,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Get_Start"
            component={Get_Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot_password"
            component={Forgot_password}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot_password2"
            component={Forgot_password2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart_Page"
            component={Cart_Page}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              headerTitle: 'My Cart',
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              headerTitle: 'Payment',
            }}
          />
          <Stack.Screen
            name="Cupon"
            component={Cupon}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              headerTitle: 'My Coupons',
            }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerTitle: '',
              // example use icon
              headerRight: () => (
                <>
                  <Cart
                    style={styles.cart}
                    color="#000"
                    brand={'Feather'}
                    name="shopping-cart"
                    onLongPress={() => console.log('onLongPress()')}
                    onPress={() => console.log('onPress()')}
                    size={25}
                    type="material"
                  />
                </>
              ),
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: true,
              headerTitle: 'My profile',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#6A4029',
                fontWeight: '700',
                fontSize: 28,
              },
              headerTransparent: true,
              // headerBackImageSource: {btn_left},
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              // headerLeft: ({ navigation }) => (
              //   <>
              //     <ButtonLeft
              //       style={styles.btn_left}
              //       color="#000"
              //       brand={'Feather'}
              //       name="chevron-left"
              //       onLongPress={() => console.log('onLongPress()')}
              //       onPress={() => navigation.goBack()}
              //       size={25}
              //       type="material"
              //     />
              //   </>
              // ),
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={Delivery}
            options={{
              headerShown: true,
              headerTitle: 'Checkout',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 18,
              },
              headerTransparent: true,
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
            }}
          />
          <Stack.Screen
            name="NewProduct"
            component={NewProduct}
            options={{
              headerShown: true,
              headerTitle: 'New Product',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              headerTransparent: true,
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
            }}
          />
          <Stack.Screen
            name="New_Promo"
            component={New_Promo}
            options={{
              headerShown: true,
              headerTitle: 'New Promo',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              headerTransparent: true,
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
            }}
          />
          <Stack.Screen
            name="See_All"
            component={See_All}
            options={{
              headerShown: true,
              headerTitle: 'Product All',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              },
              headerTransparent: true,
              headerStyle: { backgroundColor: '#f2f2f2' },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  // btn_left: {
  //   color: '#6A4029',
  // },
  // cart: {
  //   marginRight: 20,
  // },
});
