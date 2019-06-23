import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return (
        <Link to={`/edit/${id}`} className='list-item'>
            <div>
                <h3 className='list-item__description'>{description}</h3>
                <span className='list-item__date'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className='list-item__price'>
                {numeral(amount / 100).format('$0,0.00')} 
            </h3>
        </Link>
    )
}

ExpenseListItem.propTypes = {
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
}

export default ExpenseListItem


