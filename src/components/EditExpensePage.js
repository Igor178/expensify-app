import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../redux/actions/expensesActions'
import PropTypes from 'prop-types'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={expense => {
                props.editExpense(props.expense.id, expense)
                props.history.push('/')
            }}
        />
        <button onClick={() => {
            props.removeExpense(props.expense.id)
            props.history.push('/')
        }}>Remove</button>
    </div>
)

EditExpensePage.proptypes = {
    editExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
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
        editExpense: (id, updates) => dispatch(editExpense(id, updates)),
        removeExpense: id => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)