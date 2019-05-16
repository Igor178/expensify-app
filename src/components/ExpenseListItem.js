import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
            <p>{amount}$ - {createdAt}</p>
        </div>
    )
}

ExpenseListItem.propTypes = {
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
    // id: PropTypes.string,
}

export default ExpenseListItem


