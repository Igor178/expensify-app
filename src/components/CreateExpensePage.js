import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense, editExpense } from '../redux/actions/expensesActions'
import PropTypes from 'prop-types'

const CreateExpensePage = ({ addExpense, history }) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                addExpense(expense)
                history.push('/')
            }}
        />
    </div>
)

CreateExpensePage.propTypes = {
    addExpense: PropTypes.func.isRequired,
    editExpense: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        addExpense: data => dispatch(addExpense(data)),
        editExpense: data => dispatch(editExpense(data))
    }
}

export default connect(null, mapDispatchToProps)(CreateExpensePage)