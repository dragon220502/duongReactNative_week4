import { StyleSheet, Text, View, Image, TextInput, ViewBase } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';




import Lab2a from './components/lab2a';
import Lab2b from './components/lab2b';
import Lab2c from './components/lab2c';
import Lab2_Tiktok_OK from './components/lab2_Tiki_OK';

export default function App()  {
    return (
        <View style={styles.container}>     
            <Lab2a/>; 
            <Lab2b/>; 
            <Lab2c/>; 
            <Lab2_Tiktok_OK/>;  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
  },
        
})
    

    

    

   

    