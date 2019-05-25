import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
            <p>
                {numeral(amount / 100).format('$0,0.00')} 
                - 
                {moment(createdAt).format('DD/MM/YYYY')}</p>
        </div>
    )
}

ExpenseListItem.propTypes = {
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
}

export default ExpenseListItem


