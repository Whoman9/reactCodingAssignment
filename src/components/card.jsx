// import { Edit } from "@mui/icons-material";
// import {Modal} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import { blueGrey, red } from "@mui/material/colors";
// import { Modal } from "./modal";
const Card = ({ title, desc, status, statusId = 1 }) => {
  const [statuses, setStatus] = useState(todo);
  const [statusValue, setStatusValue] = useState(status);
  const statusChange = (val) => {
    switch (val) {
      case "Todo":
        setStatus(todo);
        break;
      case "InProgress":
        setStatus(inProgress);
        break;
      case "InQA":
        setStatus(inQA);
        break;
      case "Blocked":
        setStatus(blocked);
        break;
      case "Done":
        setStatus(done);
        break;
    }
  };
  // useEffect(() => {
  //     statusChange();
  // }, [statusValue]);

  const [age, setAge] = useState(status);

  const handleChange = (event) => {
    setAge(event.target.value);
    statusChange(event.target.value);
  };

  console.log(status);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <div className="d-flex justify-content-around">
            <FormControl fullWidth className="w-50">
           
              <Select
                value={age}
                inputProps={{ "aria-label": "Without label" }}
                defaultValue={status}
                onChange={handleChange}
                variant="filled"
                autoWidth={true}
                className="w-100"
              >
                {statuses.options.map((item) => {
                  return <MenuItem value={item.value} 
                className="w-100"
                >{item.value}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

let todo = {
  options: [{ value: "InProgress" }, { value: "Todo" }],
};
let inProgress = {
  options: [{ value: "InQA" }, { value: "Blocked" }, { value: "InProgress" }],
};
let inQA = {
  options: [{ value: "Done" }, { value: "InQA" }],
};
let blocked = {
  options: [{ value: "Todo" }, { value: "Blocked" }],
};
let done = {
  options: [{ value: "Deployed" }, { value: "Done" }],
};

export default Card;
