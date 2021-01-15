import React, { useState } from 'react'
import { withRouter } from 'react-router'
import Navbar from './Navbar'
import axios from 'axios'


const Task = ({ isAuthenticated, history }) => {

    const [tasks, addTask] = useState([])
    const [count, setCount] = useState(1)

    const getTask = async () => {
        const resp = await axios.get(`http://jsonplaceholder.typicode.com/todos/${count}`)
        setCount(count + 1)
        addTask(tasks => [...tasks, resp.data])
    }

    if (!isAuthenticated) {
        console.log(isAuthenticated)
        history.push('/signin')
    }

    const Delete = (e, index) => {

        addTask(arr => [...arr.slice(0, index), ...arr.slice(index + 1)])
        return
    }

    return (<div>
        <Navbar />
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>

            {tasks.map((task, index) => <tr><td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{(task.completed).toString()}</td>
                <td><button type='onClick' className='deletebtn' onClick={e => Delete(e, index)}>Delete</button></td></tr>)}

        </table>
        <button className='addbtn' onClick={e => getTask()}>Add task</button>

    </div>)
}

export default withRouter(Task) 