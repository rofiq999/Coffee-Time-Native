import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  all_content: {
    marginTop: 100,
    marginLeft:"5%",
    width:"90%"
  },
  content_card_product: {
    marginTop: 60,
  },
  list_product: {
    display: `flex`,
    flexDirection: `row`,
    flexWrap: 'wrap',
  },
  text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 28,
    fontWeight: '900',
  },
  text_container: {
    justifyContent:'center',
    flexDirection:'row'
  }
});

export default styles;
