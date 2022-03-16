import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TaskCard.styles';

const TaskCard = ({todo, onPress, isDone, onLongPress}) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={isDone ? styles.disable_container : styles.enable_container}>
        <Text style={isDone ? styles.disable_text : styles.enable_text}>
          {todo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
