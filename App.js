import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const[task,setTask] = useState();
  const[taskItems,setTaskItems] = useState([]);

  const handleAddTask =() =>{
   
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
    {/* Today's Tasks */}
      <View style={styles.taskWraper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
       </View>
   <View style={styles.items}>
    {/* This is where the task will go! */}
    {
      taskItems.map((item, index) => {
       return (
         <TouchableOpacity key={index} onPress={() => completeTask(index)}>
           <Task text = {item} />
         </TouchableOpacity>
       )
      
      })
    }
   </View>
   {/*Write a task*/}
   <KeyboardAvoidingView 
   behavior ={Platform.OS=== "android"? "padding" : "height" }
   style={styles.writeTaskWrapper}>
   <TextInput style={styles.input} placeholder={'Write a Task'}  value={task} onChangeText={text => setTask(text)} />

   <TouchableOpacity onPress={() => handleAddTask()}>
     <View style={styles.addTask}>
     <Text style={styles.addText}>+</Text>
     </View>
   </TouchableOpacity>

   </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWraper: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius:60,
    backgroundColor: '#fff',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addTask: {
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
},
});
