import { useState, useEffect } from "react"; 
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native"; 
import AppBar from './AppBar';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoListScreen({ navigation }) { 
    // const [todos, setTodos] = useState([]); use Redux à la place
    const [loading, setLoading] = useState(true); 

    const { todos, addTodo } = useTodoStore();

    //const todos = useSelector(state => state.todos); use Zustand à la place
    const dispatch = useDispatch();

    // Simuler le chargement des tâches depuis un serveur (useEffect local)
    /*
    useEffect(() => { 
        console.log("Chargement des tâches..."); 
    setTimeout(() => { 
        setTodos([ 
            { id: 1, title: "Faire les courses" }, 
            { id: 2, title: "Sortir le chien" }, 
            { id: 3, title: "Coder une app RN" }, 
        ]); 
    setLoading(false); 
    }, 1000); 
    }, []); // [] => exécute une seule fois au montage */

    // Simuler le chargement des tâches depuis un serveur (useEffect Redux)

    /*useEffect(() => { 
        dispatch(addTodo({ id: 1, title: "Faire les courses" })); 
        dispatch(addTodo({ id: 2, title: "Sortir le chien" })); 
        dispatch(addTodo({ id: 3, title: "Coder une app RN" })); 
    }, 
    []);*/

    // Simuler le chargement des tâches depuis un serveur (useEffect Zustand)
    useEffect(() => { 
        addTodo({ id: 1, title: "Faire les courses" }); 
        addTodo({ id: 2, title: "Sortir le chien" }); 
        addTodo({ id: 3, title: "Coder une app RN" });
        setLoading(false); // apres avoir consulter zustand et redux 
    }, 
    []);
    
    if (loading) { 
        return ( 
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
        <Text style={{ fontSize: 20 }}>Chargement...</Text> 
        </View> ); 
    } 

    
return (
    <View style={{ flex: 1, padding: 20 }}> 
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Mes tâches</Text> 
    <AppBar title="Mes tâches" />
    <FlatList 
    data={todos} 
    keyExtractor={(i) => i.id.toString()} 
    renderItem={({ item }) => ( 
        <TouchableOpacity onPress={() => 
            // TODO : naviguer vers "Détails" avec id + title 
            navigation.navigate("Détails", { id: item.id, title: item.title })
            } 
        > 
    <Text style={{ padding: 10, fontSize: 18 }}>{item.title}</Text> 
    </TouchableOpacity> 
    )} 
    /> 
    </View> 
); 
}