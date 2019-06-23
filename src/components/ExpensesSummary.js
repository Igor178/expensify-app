import React from 'react'
import { getExpensesTotal } from '../utils/expensesTotal'
import { getVisibleExpenses } from '../utils/filterExpenses'
import numeral from 'numeral'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'


const ExpensesSummary = props => (
    <div className='summary-content__wrapper'>
        <div className='content-container'>
            <div className='summary-content'>
                <h1 className='summary-content__title'>Viewing <strong className='summary-content__bold'>{props.expenses.length}</strong> {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling <strong className='summary-content__bold'>{numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</strong></h1>
                <NavLink to='/create-expense' className='summary-content__btn'>Add Expense</NavLink>
            </div>
        </div>
    </div>
)

ExpensesSummary.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps, null)(ExpensesSummary)

