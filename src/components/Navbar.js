import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'




const Navbar = () => {



    return (<Fragment>
        <ul>
            <li>
                <img src='https://www.southcharlottefamilycounseling.com/wp-content/uploads/2015/10/cropped-logo-dummy.png' alt="LOGO" />
            </li>

            <li >
                <Link to="/" > Home </Link>
            </li>
            <li >
                <Link to="/task">
                    Task
         </Link>
            </li>
            <li >
                <Link to="/user">
                    User
        </Link>
            </li>
        </ul>
    </Fragment>)
}



export default withRouter(Navbar)