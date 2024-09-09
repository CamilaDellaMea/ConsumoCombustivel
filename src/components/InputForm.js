import React, { useState } from 'react';  
import { View, TextInput, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';  

const InputForm = ({ onSubmit }) => {  
    const [km, setKm] = useState('');  
    const [liters, setLiters] = useState('');  

    const calcularResultado = () => {  
        onSubmit(Number(km), Number(liters));  
    };  

    return (  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
            <View style={styles.container}>  
                <View style={styles.inputContainer}>  
                    <Text style={styles.tittle}>Calculadora de Consumo de Combustível</Text>   
                    <Text style={styles.label}>Informe a quilometragem (KM):</Text>  
                    <TextInput  
                        keyboardType="numeric"  
                        value={km}  
                        onChangeText={setKm}  
                        style={styles.input}  
                    />  
                </View>  
                <View style={styles.inputContainer}>  
                    <Text style={styles.label}>Informe os litros de gasolina:</Text>  
                    <TextInput  
                        keyboardType="numeric"  
                        value={liters}  
                        onChangeText={setLiters}  
                        style={styles.input}  
                    />  
                </View>  
                
                <TouchableOpacity style={styles.button} onPress={calcularResultado}>  
                    <Text style={styles.buttonText}>Calcular</Text>  
                </TouchableOpacity>  
            </View>  
        </TouchableWithoutFeedback>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        padding: 10,  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#1C1C1C',
        marginTop: -150
    },  
    inputContainer: {  
        width: '80%', // Aumenta a largura dos inputs  
        marginBottom: 20,  
    },  

    label: {  
        fontSize: 16,  
        marginBottom: 5, // Espaço entre o texto e o input  
        color: '#D3D3D3', // Cor do texto do label  
    },  

    input: {  
        borderWidth: 1,  
        padding: 15,  
        borderColor: '#ccc',  
        borderRadius: 8, // Adiciona borda arredondada aos inputs  
        color: '#FFFFFF'  
    },  

    button: {  
        backgroundColor: "#00CED1",   
        padding: 10,  
        borderRadius: 8,  
        marginTop: 10,  
        width: '50%',  
        opacity: 0.9, // Efeito de transparência  
        shadowColor: "#A9A9A9", // Cor da sombra  
        shadowOffset: {  
            width: 0,  
            height: 2,  
        },  
        shadowOpacity: 0.3, // Opacidade da sombra  
        shadowRadius: 4, // Raio da sombra  
    },  
    buttonText: {  
        color: "#FFFFFF",   
        fontSize: 18,  
        textAlign: 'center', // Centraliza o texto dentro do botão  
    },  
    tittle: {  
        fontSize: 24, // Tamanho da fonte do título  
        fontWeight: 'bold', // Negrito  
        color: '#00CED1', // Cor do título  
        marginBottom: 100, // Espaço abaixo do título  
        textAlign: 'center',  
        lineHeight: 30,  
        paddingTop: 10  
    }  
});  

export default InputForm;