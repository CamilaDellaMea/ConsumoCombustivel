import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const ConsumptionResult = ({ average, classification }) => {  
    return (  
        <View style={styles.container}>  
            <Text style={styles.resultText}>Média de Consumo: {average.toFixed(2)} Km/L</Text>  
            <Text style={styles.classificationText}>Classificação: {classification}</Text>  
        </View>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        padding: 20,  
    },  
    resultText: {  
        fontSize: 24,  
        fontWeight: 'bold',
        color:'#D3D3D3', 
        textAlign:"center" 
    },  
    classificationText: {  
        fontSize: 22,
        color:'#D3D3D3',  
        marginTop: 10,  
    },  
});  

export default ConsumptionResult;