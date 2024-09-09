export const calculateConsumption = (km, liters) => {  
    if (liters === 0) return 0;  
    return km / liters;  
};  

export const classifyConsumption = (average) => {  
    if (average > 12) return 'A';  
    if (average > 10) return 'B';  
    if (average > 8) return 'C';  
    if (average > 4) return 'D';  
    return 'E';  
};