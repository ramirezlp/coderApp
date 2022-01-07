import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
import { styles } from './styles'


const ListItem = ({taskParam, deleteTask}) => {
    
    const [task, setTask] = useState(taskParam)

    const marcarCompletadoTask = (item) => {
        setTask({
            id: item.id,
            completado: true,
            task: item.task
        })
      }

    return (
        <View style={styles.taskListItem}>
            <Text style={styles.textItem}>{task.task}{task.completado ? ' - Completado ' : ''}</Text>
            <TouchableOpacity onPress={() => deleteTask && deleteTask(task.id)}>
                    <Text style={styles.deleteItem}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {marcarCompletadoTask(task)}}>
                    <Text style={styles.marcarCompletadoItem}>Marcar Completado</Text>
            </TouchableOpacity>
        </View>
    );
}



export default ListItem;