import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import InputCard from './src/components/InputCard/InputCard';
import TaskCard from './src/components/TaskCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [task, setTask] = useState([]);

  const counter = task
    ? task.filter(todos => todos.isDone === false).length
    : 0;
  const [todo, setTodo] = useState('');

  const findTodo = async () => {
    const result = await AsyncStorage.getItem('tasks');
    if (result !== null) {
      setTask(JSON.parse(result));
    }
  };
  useEffect(() => {
    findTodo();
  }, []);

  async function addTask() {
    const newTask = {
      name: todo,
      id: Date.now(),
      isDone: false,
    };
    setTask([...task, newTask]);
    await AsyncStorage.setItem('tasks', JSON.stringify(task));
    setTodo('');
  }

  async function removeTask(id) {
    if (task.length === 1) {
      setTask([]);
      await AsyncStorage.removeItem('tasks');
    } else {
      setTask(task.filter(tasks => tasks.id !== id));
      await AsyncStorage.setItem('tasks', JSON.stringify(task));
    }
  }

  async function complateTask(id) {
    const newTask = task.map(tasks => {
      if (tasks.id === id) {
        tasks.isDone = !tasks.isDone;
      }
      return tasks;
    });
    setTask(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(task));
  }

  const renderTask = ({item}) => {
    return (
      <TaskCard
        todo={item.name}
        isDone={item.isDone}
        onPress={() => complateTask(item.id)}
        onLongPress={() => removeTask(item.id)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>YAPILACAKLAR:</Text>
        <Text style={styles.header_text}>{counter}</Text>
      </View>
      <FlatList
        data={task}
        keyExtractor={item => item.id}
        renderItem={renderTask}
      />
      <InputCard value={todo} onChangeText={setTodo} onPress={addTask} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
  },
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
});
