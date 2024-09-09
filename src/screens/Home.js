import React from 'react';  
import { View, StyleSheet, Text } from 'react-native';  
import InputForm from '../components/InputForm';  

const Home = ({ navigation }) => {  
    const calcularResultado = (km, liters) => {  
        navigation.navigate('Result', { km, liters });  
    };  

    return (  
        <View style={styles.container}> 
            <InputForm onSubmit={calcularResultado} />  
        </View>  
        
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center', 
    },  

});  

export default Home;