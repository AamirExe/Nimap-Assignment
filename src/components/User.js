import React, { useState } from 'react'
import { withRouter } from 'react-router'
import Navbar from './Navbar'



const User = ({ user, logout, history, changePassword, isAuthenticated }) => {

    if (!isAuthenticated) {
        history.push('/signin')
    }
    const [state, toggleState] = useState(true)
    const [newPassword, setNewPassword] = useState("")
    const onClick = e => {
        logout(false)
        history.push('/signin')
    }
    const changeType = e => {
        toggleState(false)
    }

    const createNewPassword = e => {

        setNewPassword(e.target.value)

    }

    const saveNewPassword = () => {
        if (newPassword.trim() == "") {
            return console.log("Enter password")
        }
        changePassword({ ...user, password: newPassword })
        toggleState(true)
    }

    const savePasswordButton = <button className='btn' onClick={e => saveNewPassword()} >Save Password</button>

    const chngPasswordButton = <button className='btn' onClick={e => changeType(e)} >Change Password</button>

    return (<div>
        <Navbar />
        <div className='user'>
            <label for="uname"><b>Username:</b></label> <label for="uname"><b>{user.username}</b></label>
            <label for="uname"><h2>Password</h2></label>
            <input type='password' value={state ? user.password : newPassword} disabled={state} onChange={e => createNewPassword(e)} />
            {state ? chngPasswordButton : savePasswordButton}
            <button className='logoutbtn' onClick={e => onClick(e)}>Logout</button>
        </div>
    </div>)
}
export default withRouter(User) 