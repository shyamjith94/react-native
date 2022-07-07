
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, TouchableNativeFeedback, Keyboard } from 'react-native';


import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';



export default function App() {
  
  const [todos, setTodos] = useState([
     {text:'test-1', key:1},
     {text:'test-2', key:2},
     {text:'test-3', key:3},
   ])
  
  const pressHandler=(key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key)
    })
  }

  const onpressHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text:text, key:Math.random().toString()},...prevTodos]
      })
    }
    else {
      Alert.alert("OOPS", 'length should more than 3', [{text:'Understood'}])
    }
  }
  return (
    <TouchableNativeFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
    <View style={styles.appContainer}>
      <Header />
      <View style={styles.content}>
        <AddTodo onpressHandler={onpressHandler} />
        <View style={styles.list}>
          <FlatList data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} pressHandler={pressHandler} />
          )}>

          </FlatList>
        </View>
      </View>
      </View>
      </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
   backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    // backgroundColor: 'pink',
    flex:1

  },
  list: {
    flex:1,
    marginTop: 20,
    // backgroundColor: 'yellow',

  }
  
})
