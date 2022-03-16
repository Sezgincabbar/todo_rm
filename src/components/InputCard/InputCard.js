import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const InputCard = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Todo..."
        placeholderTextColor={'gray'}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
      />
      <View style={styles.divider} />
      <TouchableOpacity onPress={onPress}>
        <View style={value ? styles.button_enabled : styles.button_disabled}>
          <Text style={{padding: 10, color: 'white'}}>KAYDET</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#37474F',
    margin: 10,
    borderRadius: 8,
    padding: 5,
  },
  button_enabled: {
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    marginHorizontal: 15,
  },
  button_disabled: {
    backgroundColor: '#808080',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    marginHorizontal: 15,
  },
  textInput: {
    paddingHorizontal: 20,
    fontSize: 20,
  },
  divider: {
    borderWidth: 0.8,
    borderColor: 'gray',
    marginHorizontal: 15,
  },
});
