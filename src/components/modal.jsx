// import React from "react";
// import {Modal} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
// import { useState } from "react";
// import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
 
// function Example() {
//     const [show, setShow] = useState(false);
//     // const [form, setForm] = setForm();
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const handleAddTask = () => {

//     }
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch static backdrop modal
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header >
//             <Modal.Title>Add new Task</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <TextField variant={"outlined"} label={"Title"} className={"w-100"}></TextField>
//           <TextField variant={"outlined"} label={"Description"} className={"w-100 mt-2"} multiline={true}></TextField>
//           <InputLabel id="demo-simple-select-label">Status</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
       
//           label="Age"
       
//         >
//           <MenuItem value={1}>Todo</MenuItem>
//           <MenuItem value={2}>InProgress</MenuItem>
//           <MenuItem value={3}>Blocked</MenuItem>
//           <MenuItem value={4}>InQA</MenuItem>
//           <MenuItem value={5}>Done</MenuItem>
//         </Select>
//           </Modal.Body>
       
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Cancel
//             </Button>
//             <Button onClick={handleAddTask} variant="primary">Add</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
//   export default Example;