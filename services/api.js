import axios from "axios"; 
const API_URL = "https://jsonplaceholder.typicode.com"; 
// axios export 
/*const fetchTodosAxios = async () => { 
    const response = await axios.get(`${API_URL}/todos?_limit=10`); 
    return response.data; 
}; 
// fetch export 

export const fetchTodosFetch = async () => { 
    const response = await fetch(`${API_URL}/todos?_limit=10`); 
    if (!response.ok) { 
        throw new Error("Erreur serveur"); 
    } 
    return response.json(); 
};*/


// Fonction helper pour créer un délai
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// axios export avec délai
export const fetchTodosAxios = async () => { 
    await delay(3000); // Délai de 3 secondes
    const response = await axios.get(`${API_URL}/todos?_limit=10`); 
    return response.data; 
}; 

// fetch export avec délai
export const fetchTodosFetch = async () => {
    await delay(3000); // Délai de 3 secondes
    const response = await fetch(`${API_URL}/todos?_limit=10`); 
    if (!response.ok) { 
        throw new Error("Erreur serveur"); 
    } 
    return response.json(); 
};
