import React, { Fragment, useState } from 'react'
import Dropdown from './Dropdown'
import Information from './Information'
import Navbar from '../Navbar'
import { BrowserRouter, withRouter } from 'react-router-dom'

const Home = ({ history, isAuthenticated }) => {

    if (!isAuthenticated) {
        history.push('/signin')
    }
    const [selectValue, setSelectValue] = useState(null)


    return (<Fragment>

        <Navbar />
        <div className='center'>
            <Dropdown setSelectValue={setSelectValue} />
            <Information selectedValue={selectValue} />
        </div>
    </Fragment>)
}

export default withRouter(Home)