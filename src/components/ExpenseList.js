import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import { getVisibleExpenses } from '../utils/filterExpenses'

export const ExpenseList = props => (
    <div className='content-container'>
        <div className='expense-list'>
            <div className='expense-list__header'>
                <p>Expense</p>
                <p>Amount</p>
            </div>
            
                {
                props.expenses.length === 0 ? (
                    <p className='expense-box__message'>No expenses</p>
                ) : (
                    props.expenses.map(expense => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })
                )
                }
          
        </div>
    </div>
)

ExpenseList.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)