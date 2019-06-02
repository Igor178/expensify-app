import React from 'react'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../redux/actions/expensesActions'
import PropTypes from 'prop-types'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={expense => {
                props.startEditExpense(props.expense.id, expense)
                props.history.push('/dashboard')
            }}
        />
        <button onClick={() => {
            props.startRemoveExpense(props.expense.id)
            props.history.push('/dashboard')
        }}>Remove</button>
    </div>
)

EditExpensePage.proptypes = {
    startEditExpense: PropTypes.func.isRequired,
    startRemoveExpense: PropTypes.func.isRequired,
    expense: PropTypes.shape({
        amount: PropTypes.number,
        notes: PropTypes.string,
        id: PropTypes.string,
        description: PropTypes.string,
        createdAt: PropTypes.number
    })
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => {
    return {
        startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
        startRemoveExpense: id => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)