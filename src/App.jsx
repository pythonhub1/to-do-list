import { TextField, Stack, Box, Typography, Button, Checkbox, Divider} from "@mui/material";
import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'
// eslint-disable-next-line react/prop-types
function MakeTask({name, num, setTaskList, taskList}) {
    const index = num - 1
    const [checked, setChecked] = useState(false)
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Stack direction='row' alignItems='center' justifyContent='left'>
                            <Typography sx={{textDecoration: (checked) ? 'line-through'  : null}}>{num}. {name}</Typography>
                            <Checkbox onChange={(e) => setChecked(!checked)}></Checkbox>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='right'>
                <Button startIcon={<DeleteIcon />} onClick={() => {setTaskList([...taskList.slice(0, index), ...taskList.slice(index+1)])}}></Button>
            </Stack>
        </Stack>
    )
}
function App() {
    console.log('I am alive. Hello World!')
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');
    return (
        <>
            <center><h1>TO DO LIST</h1></center>
            <Stack justifyContent='center' alignItems='center'>
                <Stack width='600px' spacing={2}>
                    <Stack height='500px' sx={{overflowY: 'overlay', borderStyle: 'solid', borderRadius: '10px'}} paddingLeft={2}>
                        {taskList.map(
                            (task, index) =>
                                <>
                                    <MakeTask
                                        key={index}
                                        name={task}
                                        num={index+1}
                                        setTaskList={setTaskList}
                                        taskList={taskList}/>
                                    <Divider/>
                                </>
                        )}
                    </Stack>
                    <TextField
                        label="Name"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setTaskList([...taskList, task])}
                        }}
                        onChange={(event) => setTask(event.target.value)}/>
                    <center><h3>Press enter on the text field to add task</h3></center>
                </Stack>
            </Stack>


        </>
    )
}

export default App
