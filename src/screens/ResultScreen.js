import React from 'react';  
import { View, StyleSheet } from 'react-native';  
import { calculateConsumption, classifyConsumption } from '../utils/consumptionCalculator';  
import ConsumptionResult from '../components/ConsumptionResult';  

const ResultScreen = ({ route }) => {  
    const { km, liters } = route.params;  
    const average = calculateConsumption(km, liters);  
    const classification = classifyConsumption(average);  

    return (  
        <View style={styles.container}>  
            <ConsumptionResult average={average} classification={classification} />  
        </View>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',    
        alignItems: 'center',  
        backgroundColor: '#1C1C1C'
    },  
});  

export default ResultScreen;