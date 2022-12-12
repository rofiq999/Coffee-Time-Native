import {StyleSheet} from 'react-native';
// import bar from "../assets/header/bar.png"
const styles = StyleSheet.create({
  box_search: {
    alignItems:`center`,
    backgroundColor:`#EFEEEE`,
    borderRadius:50,
    display:`flex`,
    flexDirection:'row',
    marginTop:30,
    paddingHorizontal:20,
    paddingVertical:5,
    width:`100%`,
  },
  category_Coffee: {
    alignItems:`center`,
    display:`flex`,
    flexDirection:`row`,
    justifyContent:`space-between`,
    marginTop:30,    
  },
  content_card_product: {
    marginTop:60,
  },
  content_home: {
    paddingHorizontal:30,
  },
  home_background: {
    backgroundColor:`#F2F2F2`, 
  },
  input_search: {
    border:2,
    color:`black`,
    fontSize:20,
    height: 40,
    margin: 12,
    outline:`none`,
    padding: 10,
    width:`90%`,
  },
  list_product: {
    display:`flex`,
    flexDirection:`row`
  },
  nav_product: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight:30,
    paddingHorizontal:10,
    textAlign:`center`,
    color:"black"
  },
  nav_product_black: {
    borderBottomColor:`black`,
    borderBottomWidth:2,
    color:`black`,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight:30,
    paddingHorizontal:10,
    textAlign:`center`,
  },
  navgiation_bar_product: {
    alignItems:`center`,
    display:`flex`,
    flexDirection:`row`,
    justifyContent:`center`,
    marginTop:30,
  },
  title_coffee: {
    color:`#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
  },
  title_coffee_all: {
    color:`#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    // lineHeight:60,
  },
  title_home: {
    color:`black`,
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: '700',
    lineHeight:60,
  }
});

export default styles;
