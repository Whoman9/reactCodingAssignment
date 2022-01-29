
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useState } from "react";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Card from "./card";
import '../style/task.css';

const Task = (props) => {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState(allTasks);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddTask = () => {
        let task = {
            title: taskTitle,
            desc: taskDesc,
            status: "todo",
            statusId: 1
        };
        setTasks((previousTasks) => {
            return [...previousTasks, task];
        });
        setShow(false);
    }
        
   
    return ( 
        <>
            <div className="container" style={{backgroundColor: "lightblue"}}>
                <div className="row d-flex" style={{backgroundColor: "yellowgreen"}}>
                    <div className="col p-1" style={{marginLeft: "10px", fontSize: "20px", fontWeight: "bold"}}>
                        Tasks
                    </div>
                    <div className="text-center" style={{paddingLeft: 0}}>
                        <button className="btn btn-warning" onClick={handleShow}>Add new task</button>
                        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header >
            <Modal.Title>Add new Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <TextField variant={"outlined"} label={"Title"} className={"w-100"} value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}></TextField>
          <TextField variant={"outlined"} label={"Description"} className={"w-100 mt-2"} multiline={true} value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)}></TextField>
 
      
          </Modal.Body>
       
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleAddTask} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
                    </div>
                    
                </div>
                
                <div className="row m-1">
                    {tasks.map((task,i) => {
                        return(
                            <div className="w-50 p-2"><Card key={i} title={task.title} desc={task.desc} status={task.status} statusId={task.statusId}></Card></div>
                        )
                    })}
                </div>
                {/* <div className="row m-1">
                    <div className="col"><Card></Card></div>
                    <div className="col"><Card></Card></div>
                </div> */}
            </div>
        </>
     );
};
const allTasks = [
    {
        title: "Task",
        desc: "Do the react assignment",
        status: "Todo",
        statusId: 1
    }
];
 
export default Task;