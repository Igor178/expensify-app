import React from 'react'
import { getExpensesTotal } from '../utils/expensesTotal'
import { getVisibleExpenses } from '../utils/filterExpenses'
import numeral from 'numeral'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


const ExpensesSummary = props => (
    <div>
        <h2>Viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</h2>
    </div>
)

ExpensesSummary.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps, null)(ExpensesSummary)

