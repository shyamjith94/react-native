import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";


export default function AddTodo({onpressHandler}) {
    const [text, setText] = useState('')

    const changeHandler = (inputText) => {
        setText(inputText)
    }

    
    return (

        <View>
            <TextInput placeholder="new todos" 
                onChangeText={changeHandler}
                style={styles.inputText}
            />
            <Button title="ADD" onPress={()=>onpressHandler(text)} color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:"#ddd"
    }
})