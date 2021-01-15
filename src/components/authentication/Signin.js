import React, { useState } from 'react'
import { withRouter } from 'react-router'


const Signin = ({ createUser, changeAuthentication, history }) => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = formData
    const onSubmit = e => {
        e.preventDefault();
        console.log(username, password)
        if (username.trim() == "" || password.trim() == "") {
            return
        }

        createUser({
            username: formData.username,
            password: formData.password
        })
        changeAuthentication(true)
        history.push('/')
    }

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (<div>
        <div className='alert'></div>
        <form onSubmit={e => onSubmit(e)} >
            <label for="uname"><b>Username</b></label>
            <input type='text' placeholder='Enter Username' name='username' value={username} onChange={e => onChange(e)} />
            <label for="psw"><b>Password</b></label>
            <input type='password' placeholder="Enter Password" name='password' value={password} onChange={e => onChange(e)} />
            <button type='submit' className='signin'>Submit</button>
        </form>
    </div>)
}
export default withRouter(Signin) 