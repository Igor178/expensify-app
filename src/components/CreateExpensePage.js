import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense, editExpense } from '../redux/actions/expensesActions'
import PropTypes from 'prop-types'

const CreateExpensePage = ({ startAddExpense, history }) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                startAddExpense(expense)
                history.push('/dashboard')
            }}
        />
    </div>
)

CreateExpensePage.propTypes = {
    startAddExpense: PropTypes.func.isRequired,
    editExpense: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        startAddExpense: data => dispatch(startAddExpense(data)),
        editExpense: data => dispatch(editExpense(data))
    }
}

export default connect(null, mapDispatchToProps)(CreateExpensePage)