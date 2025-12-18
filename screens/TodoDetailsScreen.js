import { View, Text, Button } from "react-native"; 
import { useTodoStore } from "../store/useTodoStore";

export default function TodoDetailsScreen({ route, navigation }) { 
    const { id, title } = route.params;  
    const removeTodo = useTodoStore((state) => state.removeTodo); // Zustand

    //const dispatch = useDispatch(); // Redux
    // handleDelete Redux
    /*const handleDelete = () => { 
        dispatch(removeTodo(id)); 
        navigation.goBack(); 
    };*/

    // handleDelete Zustand
    const handleDelete = () => { 
        removeTodo(id); 
        navigation.goBack(); 
    };

    return ( 
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
        <Text style={{ fontSize: 30 }}>{title}</Text> 
        <Text style={{ fontSize: 20, marginTop: 10 }}>ID : {id}</Text> 

        <Button 
            title="Supprimer cette tâche" 
            color="red" 
            onPress={handleDelete} 
        />
    </View> 
   );

}