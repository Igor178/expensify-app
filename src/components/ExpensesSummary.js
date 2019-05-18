import React from 'react'
import { getExpensesTotal } from '../utils/expensesTotal'
import { getVisibleExpenses } from '../utils/filterExpenses'
import numeral from 'numeral'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


const ExpensesSummary = props => (
    console.log(props.expenses.length),
    <div>
        <p>Viewing {props.expenses.length} expenses totalling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
    </div>
)

ExpensesSummary.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps, null)(ExpensesSummary)

