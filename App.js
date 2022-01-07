/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onChange = (text) => {
      setTask(text);
  }

  const addTask = () => {
    setTaskList([...taskList, {id: Math.random(), task}]);
    setTask('');
  } 

  const deleteTask = (id) => {
    console.log('id: ' + id)
    setTaskList(taskList.filter(task => task.id !== id));
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}> 
          <TextInput style={styles.textInput} 
                     placeholder="Name a tag"
                     value={task}
                     autofocus
                     onChangeText={(text) => onChange(text)} ></TextInput>
          <Button title='Send' 
                  color="#9191E9"
                  disabled={task.length === 0}
                  onPress={() => {addTask()}}></Button>
        </View>
        <View>
          <View style={styles.taskListContainer}>
            <Text style={styles.taskListTitle}>Task list</Text>
              {taskList.length > 0 ? (
                <FlatList keyExtractor={(index) => index.toString()}
                          refreshing={true}
                          data={taskList}
                          renderItem = { ({item, index}) => (
                            <View style={styles.taskListItem} key={index}>
                              <Text style={styles.textItem}>{item.task}</Text>
                              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                <Text style={styles.deleteItem}>X</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                          ></FlatList>  
              ) : 
                (<Text>No tasks yet</Text>) 
              }
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer : {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    flex: 0.8,
    borderBottomWidth: 1
  },
  taskListContainer: {
    paddingHorizontal: 20,
    marginTop: 10
  },
  taskListTitle: {
    fontSize: 20,
    color: "#cccc",
    fontWeight: '500',
    marginBottom: 10
  },
  taskListItem: {
    backgroundColor: "#f876",
    margin: 5,
    padding: 10
  }
});

export default App;
