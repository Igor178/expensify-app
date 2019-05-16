import React from 'react'
import { Link } from 'react-router-dom'
 
const NotFoundPage = () => (
    <div>
        <p>Looks like you are lost!</p>
        <Link to='/'>Dashboard</Link>
    </div>
)

export default NotFoundPage