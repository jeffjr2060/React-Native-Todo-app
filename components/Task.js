import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Task = (props) => {
    return(
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.box}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
    <View style={styles.circular}></View>
    </View>
    );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffff',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    box: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
    },
    itemText:{
        maxWidth: '80%',
        marginLeft: 15,
    },
    circular:{
        width:15,
        height:15,
        borderColor: '#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },

  });

  export default Task;
  