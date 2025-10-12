export function extractTime(value){
    const dateObj = new Date(value);
    return dateObj.toLocaleTimeString('fr-FR');
}

export function extractDate(value){
    const dateObj = new Date(value);
    return dateObj.toLocaleDateString('fr-FR');
}