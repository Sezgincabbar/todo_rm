import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  enable_container: {
    borderRadius: 10,
    backgroundColor: '#7DA453',
    margin: 10,
  },
  disable_container: {
    backgroundColor: '#37474F',
    borderRadius: 10,
    margin: 10,
  },
  enable_text: {
    color: 'white',
    fontSize: 18,
    padding: 10,
  },
  disable_text: {
    color: 'gray',
    fontSize: 18,
    padding: 10,
    textDecorationLine: 'line-through',
  },
});
