import { Button, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { db } from '../firebase_config';

const TodoListItem = ({todo, inProgress, id}) =>{

    const toggleInProgress = () =>{
        db.collection("todos").doc(id).update({
            inProgress: !inProgress
        })
    }

    const deleteTodo = () =>{
        db.collection("todos").doc(id).delete();
    }

    return(
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inProgress?"In Progress":"Completed"}></ListItemText>
            </ListItem>
            <Button onClick={toggleInProgress}>{inProgress?"Done":"UnDone"}</Button>
            <Button onClick={deleteTodo}>x</Button>
        </div>
    )
}
export default TodoListItem;